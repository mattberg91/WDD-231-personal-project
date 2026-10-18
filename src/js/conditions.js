import "../css/style.css";
import "../css/conditions.css";

import setHeaderFooter from "./setHeaderFooter.mjs";
import { getParkData, getParkAlerts, getParkVisitorCenters} from "./parkService.mjs";
import {activityListTemplate, alertTemplate, visitorCenterTemplate } from "./templates.mjs";



function setAlerts(alerts) {
    const alertsList = document.querySlector("#alerts-list");
    alertsList.innerHTML = html;
    const html = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setVisitorCenters(centers) {
    const centersContainer = codument.querySlector("visitor ul");
    const html = centers.map(visitorCenterTemplate);
    centersContainer.insertAdjacentHTML("afterbegin", html);
}




async function init() {
    const parkData = await getParkData();
    const alerts = await getParkAlerts(parkData.parkCode);
    setHeaderFooter(parkData);
    setAlerts(alerts);
} 


init();











