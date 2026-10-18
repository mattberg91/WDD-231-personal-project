import "../css/style.css";
import "../css/conditions.css";

import setHeaderFooter from "./setHeaderFooter.mjs";
import { getParkData, getParkAlerts, getParkVisitorCenters} from "./parkService.mjs";
import {activityListTemplate, alertTemplate, visitorCenterTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";


function setAlerts(alerts) {
    const alertsList = document.querySlector("#alerts-list");
    alertsList.innerHTML = html;
    const html = alerts.map(alertTemplate).join("");
    aletsContainer.insertAdjacentHTML("afterbegin", html.join(""));
}






async function init() {
    const parkData = await getParkData();
    setHeaderFooter(parkData);
    const alerts = await getParkAlerts(parkData.parkCode);
    console.log("Alerts:", alerts);
    setAlerts(alerts);
} 


init();











