import { describe, expect, test} from '@jest/globals';
import {
  validatePlayerId,
  validateSeasonYear,
  validateTeamId
} from "../../src/helpers/validation"


describe("validatePlayerId tests", () => {
  test("Should throw an error without playerId", () => {
    expect(() => { validatePlayerId() })
      .toThrow("Missing playerid argument.");
  });

  test("Should throw an error when passed a string containing anything but numbers", () => {
    expect(() => { validatePlayerId("1111a") })
      .toThrow("Inputted something other than a number for id.");
  });
});

describe("validateTeamId tests", () => {
  test("Should throw an error without teamId", () => {
    expect(() => { validateTeamId() })
      .toThrow("Missing teamid argument.");
  });

  test("Should throw an error when passed a string containing anything but numbers", () => {
    expect(() => { validateTeamId("1111a") })
      .toThrow("Inputted something other than a number for id.");
  });
});

describe('validateSeasonYear tests', () => {
  test("Should throw an error without seasonyear", () => {
    expect(() => { validateSeasonYear() })
      .toThrow("Missing seasonyear argument.");
  });

  test("Should throw an error without playerId", () => {
    expect(() => { validateSeasonYear("a") })
      .toThrow("Invalid entry for seasonyear argument.");
  });

  test("Should throw an error when passed a string containing anything but numbers", () => {
    expect(() => { validateSeasonYear("2019202a") })
      .toThrow("Inputted something other than numbers for seasonyear.");
  });

  test("Should throw an error when passed a value for seasonyear that is not two adjacent years", () => {
    expect(() => { validateSeasonYear("20192021") })
      .toThrow("Invalid entry for a single season. Please input two adjacent years like 2018 and 2019.");
  });
});