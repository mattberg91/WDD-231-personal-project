import "../css/style.css";
import "../css/conditions.css";

import setHeaderFooter from "./setHeaderFooter.mjs";
import { getParkData, getParkAlerts} from "./parkService.mjs";

async function init() {
    const parkData = await getParkData();
    setHeaderFooter(parkData);
    const alerts = await getParkAlerts(parkData.parkCode);
    console.log("Alerts", alerts);
} 


init();











