
import { parkInfoTemplate, footerTemplate } from "./templates.mjs";



export function setHeaderInfo(data) {
  // insert data into disclaimer section
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;
  // update the title of the site. Notice that we can select things in the head just like in the body with querySelector
  document.querySelector("head > title").textContent = data.fullName;
  // set the banner image
  document.querySelector(".hero-banner > img").src = data.images[0].url;
  // use the template function above to set the rest of the park specific info in the header
  document.querySelector(".hero-banner__content").innerHTML =
    parkInfoTemplate(data);
}


// document.title = parkData.fullName;
// While researching your style of writing the code I was informed that I should use
// Your style to understand the variety of different ways one can code. So I added it in,
// I still included the way I initially coded it to show I still tried.


  // set the footer info
  function setFooter(data) {
    const footerEL = document
  }

export function setParkFooter(data) {
    document.querySelector("#park-footer").innerHTML = footerTemplate(data);
}
