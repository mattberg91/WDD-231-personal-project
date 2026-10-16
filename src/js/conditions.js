import "../css/style.css";
import "../css/conditions.css";

import setHeaderFooter from "./setHeaderFooter.mjs";
import { getParkData } from "./parkService.mjs";

async function init() {
    const parkData = await getParkData();
    setHeaderFooter(parkData);
} 


init();











