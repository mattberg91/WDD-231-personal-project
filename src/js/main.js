import { getParkData } from "./parkService.mjs";
// import setHeaderfooter from "./setHeaderFooter.mjs";
// import { mediaCardTemplate } from "./templates.mjs";


const parkData = getParkData();






function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}
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
}


// document.title = parkData.fullName;
// While researching your style of writing the code I was informed that I should use
// Your style to understand the variety of different ways one can code. So I added it in,
// I still included the way I initially coded it to show I still tried.
function setParkIntro(data) {
    document.querySelector(".intro").innerHTML = `
    <h2>${data.fullName}</h2>
    <p>${data.description}</p>
    `;


}


const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    image: parkData.images[2].url,
    description:
      "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    image: parkData.images[3].url,
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    image: parkData.images[9].url,
    description: "Learn about the visitor centers in the park."
  }
];




function mediaCardTemplate(info) {
    document.querySelector(".info").innerHTML = `
    <a href="${info.link}">
        <image src="${info.image}" alt="${info.alt} class="media-card-img"
    </a>
    <h2>
        <a href="${info.}
    
    
    
    
    
    `
}


setmediaCardTemplate(parkData);
setParkIntro(parkData);
setHeaderInfo(parkData);
