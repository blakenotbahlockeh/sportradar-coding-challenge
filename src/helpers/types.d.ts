// Team Pipeline Types
export interface TeamPipelineData extends TeamsInfo {
  firstGameDate: string,
  firstGameOpponent: string
}

export type TeamsInfo = {
  teamId: string,
  teamName: string,
  teamVenueName: string,
  gamesPlayed: number,
  wins: number,
  losses: number,
  points: number,
  goalsPerGame: number
}

export type TeamsFirstGame = {
  firstGameDate: string,
  firstGameOpponent: string
}

// Player Pipeline Types
export interface PlayerPipelineData extends PlayerInfo {
  gamesPlayed: number,
  assists?: number,
  goals?: number,
  hits?: number,
  points?: number,
  saves?: number,
  goalsScoredAgainst?: number,
  goalAgainstAverage?: number,
  savePercentage?: number
}

export type PlayerInfo = {
  playerId: number,
  playerName: string,
  currentTeam: string,
  playerAge: number,
  playerPosition: string,
  rookieStatus: boolean
}

export type PlayerSeasonStats = {
  gamesPlayed: number,
  saves?: number,
  goalsScoredAgainst?: number,
  averageGoalsScoredAgainst?: number,
  savePercentage?: number
  assists?: number,
  goals?: number,
  hits?: number,
  points?: number
}
