import axios from "axios";
import { describe, expect, jest, test } from "@jest/globals";
import {
  getPlayerInfoAxiosMock,
  getPlayerInfoMock,
  getPlayerSeasonStatsAxiosMock,
  getPlayerSeasonStatsMock
} from "./mocks";
import {
  getPlayerInfo,
  getPlayerSeasonStats
} from "../../src/player/playerPipeline"

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getPlayerInfo tests", () => {
  test("should return player's information", () => {
    const mockedResponse = { data: getPlayerInfoAxiosMock };
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    const mockedGetPlayerInfo = getPlayerInfo("mockAPI");
    mockedGetPlayerInfo.then((data) => {
      expect(data).toEqual(getPlayerInfoMock);
    });
  });
});

describe("getPlayerSeasonStats tests", () => {
  test("should return player's seasons stats", () => {
    const mockedResponse = { data: getPlayerSeasonStatsAxiosMock };
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    const mockedGetPlayerStats = getPlayerSeasonStats(getPlayerInfoMock.playerPosition, "mockAPI")
    mockedGetPlayerStats.then((data) => {
        expect(data).toEqual(getPlayerSeasonStatsMock)
    });
  });
});
