// *******************************************************************
// 'Routes' to forward the supported requests (and any information
// encoded in request URLs) to the appropriate controller functions.
// *******************************************************************
import { Express } from 'express';
import {
  home,
  getTodayDate,
  getMonthsName,
  getPeople,
} from '../controllers/controller';

// set up the routing
const routes = (app: Express) => {
  app.route('/').get(home);
  app.route('/home').get(home);
  app.route('/today').get(getTodayDate);
  app.route('/months').get(getMonthsName);
  app.route('/people').get(getPeople);
};

// export the route
export default routes;
