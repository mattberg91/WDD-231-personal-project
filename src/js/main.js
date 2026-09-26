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
    return `
    <a href="${info.link}">
        <img src="${info.image}" alt="${info.name}" class="media-card-img">
        <h2 class="media-card-title">${info.name}</h2>
    </a>

    <p>${info.description}</p>
    

    `;}


function setParkInfo(data) {
    const cards = parkInfoLinks.map(function(info) {
        return mediaCardTemplate(info);
        });
    document.querySelector(".info").innerHTML = cards.join("");
}


function getMailingAddress(addresses) {
    const mailing = addresses.find(function(address) {
    return address.type === "Mailing";
    });
    return mailing;
}

function getVoicePhone(phoneNumbers) {
    const voice = phoneNumbers.find(function(phoneNumber) {
        return phoneNumber.type ==="Voice"
    });
    return voice.phoneNumber;

}

function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers)
  
  return `<section class="contact">
  <h3>Contact Info</h3>
  <h4>Mailing Address:</h4>
  <div><p>${mailing.line1}<p>
  <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
  <h4>Phone:</h4>
  <p>${voice}</p>
  </section>`;
}
function setFooter(data) {
    document.querySelector("#park-footer").innerHTML = footerTemplate(data);
}

setFooter(parkData);
setParkInfo(parkData);
setParkIntro(parkData);
setHeaderInfo(parkData);
