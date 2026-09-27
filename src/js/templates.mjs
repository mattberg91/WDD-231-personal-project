

export function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

export function mediaCardTemplate(info) {
    return `
    <a href="${info.link}">
        <img src="${info.image}" alt="${info.name}" class="media-card-img">
        <h2 class="media-card-title">${info.name}</h2>
    </a>

    <p>${info.description}</p>
    

`;}

export function setParkInfo(data) {
    const cards = parkInfoLinks.map(function(info) {
        return mediaCardTemplate(info);
        });
    document.querySelector(".info").innerHTML = cards.join("");
}


export function getMailingAddress(addresses) {
    const mailing = addresses.find(function(address) {
    return address.type === "Mailing";
    });
    return mailing;
}

export function getVoicePhone(phoneNumbers) {
    const voice = phoneNumbers.find(function(phoneNumber) {
        return phoneNumber.type ==="Voice"
    });
    return voice.phoneNumber;

}

export function footerTemplate(info) {
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





