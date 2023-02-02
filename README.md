# Sportsradar Coding Challenge
Submission by [Blake Jones](https://www.linkedin.com/in/blakematthewjones/)

## Building the project
From the terminal inside this projects directory, run the following commands:
1. Install needed dependencies
  - `npm install`
2. Build the project
  - `npm run build`
- - - -

## Running the scripts
### Team Pipeline:
From the terminal inside the project's directory, run the following command:
<pre>npm run team-pipeline --teamid=<b>TeamId</b> --seasonyear=<b>SeasonYear</b></pre>
  - Where `TeamId` is the id of the team you are searching for and `SeasonYear` is the season.
    - `TeamId` and `SeasonYear` expect only numeric values and `SeasonYear` needs to be provided as the concatenation of the two years (e.g. 20182019)
- - - -

### Player Pipeline:
From the terminal inside the project's directory, run the following command:
<pre>npm run player-pipeline --playerid=<b>PlayerId</b> --seasonyear=<b>SeasonYear</b></pre>
  - Where `PlayerId` is the id of the team you are searching for and `SeasonYear` is the season.
    - `PlayerId` and `SeasonYear` expect only numeric values and `SeasonYear` needs to be provided as the concatenation of the two years (e.g. 20182019)
- - - -

### Testing
From the terminal inside the project's directory, run the following command:
  - `npm run test`
- - - -

## Assumptions and Considerations
### Assumptions made
1. When games are retrieved in Team Pipeline in `getTeamsFirstGame`, that the first object in `data.dates` is the first game.
2. Some data was not pertinent depending on player's position, so that data needed to be swapped out with something more insightful.

### Considerations I would address with more time
1. Adding to the test suite and making it more robust.
2. Adding validation that games are in fact being received in order.
3. Ability to add more flags to request for more information for both players and teams.
4. Ability to upload a CSV with requested items and write to and return the file.
5. Adding functionality to get player and team stats across multiple years.
6. Adding functionality to request multiple teams and players stats.