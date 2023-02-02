export function validatePlayerId(playerId?: string) {
  if (!playerId) throw new Error("Missing playerid argument.");
  validateId(playerId);
}

export function validateTeamId(teamId?: string) {
  if (!teamId) throw new Error("Missing teamid argument.");
  validateId(teamId);
}

function validateId(id: string) {
  if (!/^\d+$/.test(id)) throw new Error("Inputted something other than a number for id.");
}

export function validateSeasonYear(seasonYear?: string) {
  if (!seasonYear) throw new Error("Missing seasonyear argument.");
  if (seasonYear.length != 8) throw new Error("Invalid entry for seasonyear argument.");
  if (!/^\d+$/.test(seasonYear)) throw new Error("Inputted something other than numbers for seasonyear.");
  const firstYear = parseInt(seasonYear.slice(0, 4));
  const secondYear = parseInt(seasonYear.slice(4));
  if (secondYear - firstYear != 1) throw new Error("Invalid entry for a single season. Please input two adjacent years like 2018 and 2019.");
}
