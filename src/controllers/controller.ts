// ****************************************************************
// Controller functions to get the requested data from the models,
// create an HTML page displaying the data, and return it to the
// user to view in the browser.
// ****************************************************************

import { Request, Response } from 'express';
import path from 'path';

// show html page
export const home = (_: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../pages/home.html"));
};

// get and show today's date
export const getTodayDate = (_: Request, res: Response) => {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newdate = day + "/" + month + "/" + year;

  res.json({ today: newdate });
};

// get list of month names
export const getMonthsName = (_: Request, res: Response) => {
  res.json({
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  });
};

// get list of people -- This can come from a database and what's defined in model.js
export const getPeople = (_: Request, res: Response) => {
  res.json([
    {
      firstName: "Qwerty",
      lastName: "QW",
      title: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/Qwerty/",
    },
    {
      firstName: "Qwerty678",
      lastName: "QWE",
      title: "QA",
      linkedIn: "https://www.linkedin.com/in/Qwerty678/",
    },
    {
      firstName: "Qwerty876",
      lastName: "QWERTY",
      title: "Web Developer",
      linkedIn: "https://www.linkedin.com/in/Qwerty876/",
    },
  ]);
};
