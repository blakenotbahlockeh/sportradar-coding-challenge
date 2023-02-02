import axios from "axios";
import { hostAPI } from "../helpers/apiEnums";
import { writeToCSV } from "../helpers/saveToCSVFunctions";
import { TeamsFirstGame, TeamsInfo, TeamPipelineData } from "../helpers/types";
import { validateSeasonYear, validateTeamId } from "../helpers/validation";

export function createTeamCSV() {
  const inputtedTeamID = process.env.npm_config_teamid;
  const seasonYear = process.env.npm_config_seasonyear;
  validateTeamId(inputtedTeamID);
  validateSeasonYear(seasonYear);
  const teamDataPromise = Promise.resolve(compileTeamData(inputtedTeamID, seasonYear));
  teamDataPromise.then((teamData) => {
    writeToCSV(teamData, seasonYear)
  });
}

async function compileTeamData(inputtedTeamId?: string, seasonYear?: string): Promise<TeamPipelineData> {
  const teamStatsAPI = `${hostAPI.apiDomain}/teams/${inputtedTeamId}/?expand=team.stats&season=${seasonYear}`;
  const scheduleAPI = `${hostAPI.apiDomain}/schedule?teamId=${inputtedTeamId}&season=${seasonYear}&gameType=R`;
  const teamInfo = await getTeamInfo(teamStatsAPI);
  const teamsFirstGame = await getTeamsFirstGame(scheduleAPI, inputtedTeamId);
  return {
    ...teamInfo,
    ...teamsFirstGame
  }
}

export function getTeamInfo(teamInfoAPI: string): Promise<TeamsInfo> {
  return axios.get(`${teamInfoAPI}`)
    .then(({ data }) => {
      const team = data.teams[0];
      const teamStats = team.teamStats[0].splits[0].stat;
      return {
        teamId: team.id,
        teamName: team.name,
        teamVenueName: team.venue.name,
        gamesPlayed: teamStats.gamesPlayed,
        wins: teamStats.wins,
        losses: teamStats.losses,
        points: teamStats.pts,
        goalsPerGame: teamStats.goalsPerGame
      }
    })
    .catch((err) => {
      throw new Error(`Error retrieving team information. Likely used an incorrect id: ${err}`);
    });
}

export function getTeamsFirstGame(scheduleAPI: string, inputtedTeamId?: string): Promise<TeamsFirstGame> {
  return axios.get(`${scheduleAPI}`)
    .then(({ data }) => {
      let opponentName;
      const firstGame = data.dates[0];
      const teams = firstGame.games[0].teams;
      const awayTeam = teams.away.team;
      const homeTeam = teams.home.team;
      if (awayTeam.id === inputtedTeamId) {
        opponentName = homeTeam.name;
      } else {
        opponentName = awayTeam.name;
      }
      return {
        firstGameDate: firstGame.date,
        firstGameOpponent: opponentName
      }
    })
    .catch((err) => {
      throw new Error(`Error retrieving team's first game information: ${err}`);
    });
}
