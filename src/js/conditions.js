import "../css/style.css";
import "../css/conditions.css";

import setHeaderFooter from "./setHeaderFooter.mjs";
import { getParkData, getParkAlerts, getParkVisitorCenters} from "./parkService.mjs";
import {activityListTemplate, alertTemplate, visitorCenterTemplate } from "./templates.mjs";



function setAlerts(alerts) {
    const alertsList = document.querySelector("#alerts-list");
    alertsList.innerHTML = "";

    const html = alerts.map(alertTemplate);
    alertsList.insertAdjacentHTML("afterbegin", html.join(""));
}

function setVisitorCenters(centers) {
    const centersContainer = document.querySelector("#visitor-center-list ul");
    const html = centers.map(visitorCenterTemplate);
    centersContainer.insertAdjacentHTML("afterbegin", html);
}

function setActivities(activities) {
    const activitiesContainer = document.querySelector("#activities-list ul");
    const html = activityListTemplate(activities);
    activitiesContainer.insertAdjacentHTML("afterbegin", html);
}


async function init() {
    const parkData = await getParkData();
    const alerts = await getParkAlerts(parkData.parkCode);
    const visitorCenters = await getParkVisitorCenters(parkData.parkCode);
    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(visitorCenters);
    setActivities(parkData.activities);
} 


init();











