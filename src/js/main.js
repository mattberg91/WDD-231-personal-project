import { getParkData } from "./parkService.mjs";

const parkData = getParkData();


const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;




function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

const heroContent = document.querySelector(".hero-banner__content");
heroContent.innerHTML = parkInfoTemplate(parkData);

const heroImage = document.querySelector(".hero-banner > img ");
heroImage.src = parkData.images[0].url;


// document.title = parkData.fullName;
// While researching your style of writing the code I was informed that I should use
// Your style to understand the variety of different ways one can code. So I added it in,
// I still included the way I initially coded it to show I still tried.

document.querySelector("hed > title").textContent = parkData.fullName;


function setHeaderInfo(data) {
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