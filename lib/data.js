//import fs from 'fs';
//import path from 'path';
// MUST npm install got@9.6.0
import got from 'got';
const dataURL = "https://dev-quinnalexaroyer-cs5513.pantheonsite.io/wp-json/twentytwentythree-child/v1/latest-posts/3";
export async function getSortedList() {
  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString = {};
    jsonString.body = [];
    console.log(error);
  }
  const jsonObj = JSON.parse(jsonString.body);
  jsonObj.sort(function(x,y) {
    return x.post_title.localeCompare(y.name);
  });
  return jsonObj.map(item => {
    return {
      id: item.ID.toString(),
      name: item.post_title
    }
  });
}
export async function getAllIds() {
  //const filePath = path.join(dataDir, 'presidents.json');
  //const jsonString = fs.readFileSync(filePath, 'utf8');
  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  const jsonObj = JSON.parse(jsonString.body);
  return jsonObj.map(item => {
    return {params: {id: item.ID.toString()}};
  });
}
export async function getData(theID) {
  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  const jsonObj = JSON.parse(jsonString.body);
  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === theID;
  });
  return objMatch[0];
}

