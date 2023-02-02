export const getTeamInfoAxiosMock = {
  "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2023. All Rights Reserved.",
  "teams": [
    {
      "id": 1,
      "name": "New Jersey Devils",
      "link": "/api/v1/teams/1",
      "venue": {
        "name": "Prudential Center",
        "link": "/api/v1/venues/null",
        "city": "Newark",
        "timeZone": {
          "id": "America/New_York",
          "offset": -5,
          "tz": "EST"
        }
      },
      "abbreviation": "NJD",
      "teamName": "Devils",
      "locationName": "New Jersey",
      "firstYearOfPlay": "1982",
      "division": {
        "id": 18,
        "name": "Metropolitan",
        "nameShort": "Metro",
        "link": "/api/v1/divisions/18",
        "abbreviation": "M"
      },
      "conference": {
        "id": 6,
        "name": "Eastern",
        "link": "/api/v1/conferences/6"
      },
      "franchise": {
        "franchiseId": 23,
        "teamName": "Devils",
        "link": "/api/v1/franchises/23"
      },
      "teamStats": [
        {
          "type": {
            "displayName": "statsSingleSeason",
            "gameType": {
              "id": "R",
              "description": "Regular season",
              "postseason": false
            }
          },
          "splits": [
            {
              "stat": {
                "gamesPlayed": 69,
                "wins": 28,
                "losses": 29,
                "ot": 12,
                "pts": 68,
                "ptPctg": "49.3",
                "goalsPerGame": 2.681,
                "goalsAgainstPerGame": 3.246,
                "evGGARatio": 0.7821,
                "powerPlayPercentage": "17.9",
                "powerPlayGoals": 42.0,
                "powerPlayGoalsAgainst": 39.0,
                "powerPlayOpportunities": 234.0,
                "penaltyKillPercentage": "82.3",
                "shotsPerGame": 30.6812,
                "shotsAllowed": 32.6957,
                "winScoreFirst": 0.484,
                "winOppScoreFirst": 0.342,
                "winLeadFirstPer": 0.5,
                "winLeadSecondPer": 0.704,
                "winOutshootOpp": 0.417,
                "winOutshotByOpp": 0.381,
                "faceOffsTaken": 3990.0,
                "faceOffsWon": 1869.0,
                "faceOffsLost": 2121.0,
                "faceOffWinPercentage": "46.8",
                "shootingPctg": 8.7,
                "savePctg": 0.901
              },
              "team": {
                "id": 1,
                "name": "New Jersey Devils",
                "link": "/api/v1/teams/1"
              }
            },
            {
              "stat": {
                "wins": "29th",
                "losses": "23rd",
                "ot": "3rd",
                "pts": "25th",
                "ptPctg": "25th",
                "goalsPerGame": "24th",
                "goalsAgainstPerGame": "29th",
                "evGGARatio": "29th",
                "powerPlayPercentage": "21st",
                "powerPlayGoals": "18th",
                "powerPlayGoalsAgainst": "14th",
                "powerPlayOpportunities": "3rd",
                "penaltyKillOpportunities": "24th",
                "penaltyKillPercentage": "7th",
                "shotsPerGame": "22nd",
                "shotsAllowed": "26th",
                "winScoreFirst": "29th",
                "winOppScoreFirst": "10th",
                "winLeadFirstPer": "30th",
                "winLeadSecondPer": "28th",
                "winOutshootOpp": "24th",
                "winOutshotByOpp": "24th",
                "faceOffsTaken": "16th",
                "faceOffsWon": "27th",
                "faceOffsLost": "30th",
                "faceOffWinPercentage": "29th",
                "savePctRank": "20th",
                "shootingPctRank": "22nd"
              },
              "team": {
                "id": 1,
                "name": "New Jersey Devils",
                "link": "/api/v1/teams/1"
              }
            }
          ]
        }
      ],
      "shortName": "New Jersey",
      "officialSiteUrl": "http://www.newjerseydevils.com/",
      "franchiseId": 23,
      "active": true
    }
  ]
}


export const getTeamInfoMock = {
  teamId: 1,
  teamName: "New Jersey Devils",
  teamVenueName: "Prudential Center",
  gamesPlayed: 69,
  wins: 28,
  losses: 29,
  points: 68,
  goalsPerGame: 2.681
}