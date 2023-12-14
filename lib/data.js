//import fs from 'fs';
//import path from 'path';
// MUST npm install got@9.6.0
import got from 'got';
const dataURL = "https://dev-quinnalexaroyer-cs5513.pantheonsite.io/wp-json/twentytwentythree-child/v1/microposts";
const eventsURL = "https://dev-quinnalexaroyer-cs5513.pantheonsite.io/wp-json/twentytwentythree-child/v1/events";
const degreesURL = "https://dev-quinnalexaroyer-cs5513.pantheonsite.io/wp-json/twentytwentythree-child/v1/degrees";

function parseACF(s) {
  var a = new Array();
  let fields = s.split(',');
  fields.forEach((i) => {
    var keyValue = i.split(':');
    a[keyValue[0]] = keyValue[1];
  });
  return a;
}

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
    let fields = parseACF(item.acf);
    return {
      id: item.ID.toString(),
      name: item.post_title,
      content: fields.content,
      priority: parseInt(fields.priority),
      date: item.post_date
    }
  });
}
export async function getAllIds() {
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
  let fields = parseACF(objMatch[0].acf);
  return {
    id: objMatch[0].ID.toString(),
    name: objMatch[0].post_title,
    content: fields.content,
    priority: parseInt(fields.priority),
    date: objMatch[0].post_date,
    post_content: objMatch[0].post_content
  }
}

/* EVENT FUNCTIONS */

export async function getSortedEvents() {
  let jsonString;
  try {
    jsonString = await got(eventsURL);
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
    let fields = parseACF(item.acf);
    return {
      id: item.ID.toString(),
      title: item.post_title,
      name: fields.name,
      start: fields.start_time,
      end: fields.end_time,
      location: fields.location,
      content: item.post_content
    }
  });
}
export async function getAllEventIds() {
  let jsonString;
  try {
    jsonString = await got(eventsURL);
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
export async function getEvent(theID) {
  let jsonString;
  try {
    jsonString = await got(eventsURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  const jsonObj = JSON.parse(jsonString.body);
  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === theID;
  });
  let fields = parseACF(objMatch[0].acf);
  return {
      id: objMatch[0].ID.toString(),
      title: objMatch[0].post_title,
      name: fields.name,
      start: fields.start_time,
      end: fields.end_time,
      location: fields.location,
      content: objMatch[0].post_content
  }
}

/* DEGREE FUNCTIONS */

export async function getSortedDegrees() {
  let jsonString;
  try {
    jsonString = await got(degreesURL);
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
    let fields = parseACF(item.acf);
    return { 
      id: item.ID.toString(),
      title: item.post_title,
      content: item.post_content,
      level: fields.level,
      subject: fields.subject,
      minor: fields.minor,
      college: fields.college,
      date: fields.graduation_date
    }
  });
}
export async function getAllDegreeIds() {
  let jsonString;
  try {
    jsonString = await got(degreesURL);
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
export async function getDegree(theID) {
  let jsonString;
  try {
    jsonString = await got(degreesURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  const jsonObj = JSON.parse(jsonString.body);
  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === theID;
  });
  let fields = parseACF(objMatch[0].acf);
  return {
      id: objMatch[0].ID.toString(),
      title: objMatch[0].post_title,
      content: objMatch[0].post_content,
      level: fields.level,
      subject: fields.subject,
      minor: fields.minor,
      college: fields.college,
      date: fields.graduation_date
  }
}

