import axios from "axios";
import { describe, expect, jest, test } from "@jest/globals";
import {
  getTeamInfoAxiosMock,
  getTeamInfoMock,
  getTeamsFirstGameAxiosMock,
  getTeamsFirstGameMock
} from "./mocks";
import {
  getTeamInfo,
  getTeamsFirstGame
} from "../../src/team/teamPipeline"

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getTeamInfo tests", () => {
  test("should return teams's general information", () => {
    const mockedResponse = { data: getTeamInfoAxiosMock };
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    const mockedGetTeamInfo = getTeamInfo("mockAPI");
    mockedGetTeamInfo.then((data) => {
      expect(data).toEqual(getTeamInfoMock);
    });
  });
});

describe("getTeamsFirstGame tests", () => {
  test("should return stats on the team's first game", () => {
    const mockedResponse = { data: getTeamsFirstGameAxiosMock };
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);

    const mockedGetTeamsFirstGame = getTeamsFirstGame("mockAPI", getTeamInfoMock.teamId.toString());
    mockedGetTeamsFirstGame.then((data) => {
        expect(data).toEqual(getTeamsFirstGameMock)
    });
  });
});
