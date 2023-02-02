import { writeFile } from "fs";

export function writeToCSV(data: any, seasonYear?: string) {
  let name: string;
  let csvString = 'Category, Value\n';
  let playerID = data.playerId;

  if (!!playerID) {
    name = data.playerName;
  } else {
    name = data.teamName;
  }

  const csvFileName: string = `./csvfiles/${name} ${seasonYear}.csv`;
  for (let category in data) {
    csvString += formatCSVString(category, data[category]);
  };

  writeFile(csvFileName, csvString, 'utf-8', function(err) {
    if (err) {
      throw new Error(`Error occured while writing csv file: ', ${err}`);
    } else {
      console.log(`Successfully saved csv for ${name}`);
    }
  });
}

function formatCSVString(category: string, value: any) {
  category = category.charAt(0).toUpperCase() + category.slice(1);
  category = category.replace(/([A-Z])/g, ' $1').trim();
  value = value.toString();
  return `${category},${value}\n`;
}
