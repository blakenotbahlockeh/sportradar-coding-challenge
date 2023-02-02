import axios from 'axios';
import { hostAPI } from '../helpers/apiEnums';
import { PlayerInfo, PlayerPipelineData, PlayerSeasonStats } from '../helpers/types';
import { writeToCSV } from '../helpers/saveToCSVFunctions';
import { validatePlayerId, validateSeasonYear } from '../helpers/validation';

export function createPlayerCSV() {
  const inputtedPlayerId = process.env.npm_config_playerid;
  const seasonYear = process.env.npm_config_seasonyear;
  validatePlayerId(inputtedPlayerId);
  validateSeasonYear(seasonYear);
  const playerDataPromise = Promise.resolve(compilePlayerData(inputtedPlayerId, seasonYear));
  playerDataPromise.then((playerData) => {
    writeToCSV(playerData, seasonYear);
  });
}

async function compilePlayerData(inputtedPlayerId?: string, seasonYear?: string): Promise<PlayerPipelineData>{
  const playerAPI = `${hostAPI.apiDomain}/people/${inputtedPlayerId}/`;
  const playerStatsAPI = `${playerAPI}${hostAPI.playerStatsEndpoint}${seasonYear}`;
  const playerData = await getPlayerInfo(playerAPI);
  const playerSeasonStats =  await getPlayerSeasonStats(playerData.playerPosition, playerStatsAPI);
  return {
    ...playerData,
    ...playerSeasonStats
  }
}

export function getPlayerInfo(playerAPI: string): Promise<PlayerInfo>{
  return axios.get(playerAPI)
    .then(({ data }) => {
      const player = data.people[0];
      return {
        playerId: player.id,
        playerName: player.fullName,
        currentTeam: player.currentTeam.name,
        playerAge: player.currentAge,
        playerPosition: player.primaryPosition.name,
        rookieStatus: player.rookie
      };
    })
    .catch((err) => {
      throw new Error(`Error retrieving player information. Likely used an incorrect id: ${err}`);
    });
};

export function getPlayerSeasonStats(position: string, playerStatsAPI: string): Promise<PlayerSeasonStats> {
  return axios.get(`${playerStatsAPI}`)
    .then(({ data }) => {
      const seasonStats = data.stats[0].splits[0].stat;
      // If a player is a goalie, they do not have stats for things like assists or goals
      // This conditional makes sure that players are getting more pertinent stats
      if (position === 'Goalie') {
        return {
          gamesPlayed: seasonStats.games,
          saves: seasonStats.saves,
          goalsScoredAgainst: seasonStats.goalsAgainst,
          averageGoalsScoredAgainst: seasonStats.goalAgainstAverage,
          savePercentage: seasonStats.savePercentage
        };
      }
      return {
        gamesPlayed: seasonStats.games,
        assists: seasonStats.assists,
        goals: seasonStats.goals,
        hits: seasonStats.hits,
        points: seasonStats.points
      }
    })
    .catch((err) => {
      throw new Error(`Error retrieving player stats: ${err}`);
    });
}
