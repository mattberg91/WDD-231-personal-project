


function submitForm(event) {
    const emailInput = document.querySelector('name');
    const nameInput = document.querySelector('name');

    console.log(this.name.value);
    let error = "";

    const contactForm = document.querySelector("#contact-form");
    contactForm.addEventListener("submit", submitForm);


    console.log("The form was submitted!");

    if (nameInput.value === "") {
        error += "Name is required. \n";
    }

    if (emailInput.value === "") {
        error += "Email is required. \n";
    } else if (!validateEmail(email)) {
        error += "Please enter a valid email address.\n";
    }
    if (error) {
    event.preventDefault();
    document.getElementById("form-error").textContent = error;
    }
}



function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

document.getElementById("contact-form").addEventListener("submit", submitForm);



// function submitForm(event) {
//   const nameInput = document.querySelector("#name");
//   const emailInput = document.querySelector("#email");
//   // or could do this:
//   // const nameInput = this.name
//   // const emailInput = this.email;
//   console.log(this.name.value);
//   let error = "";

//   if (nameInput.value === "") {
//     error += "Name is required.\n";
//   }

//   if (emailInput.value === "") {
//     error += "Email is required.\n";
//   } else if (!validateEmail(email)) {
//     error += "Please enter a valid email address.\n";
//   }

//   if (error) {
//     event.preventDefault();
//     document.getElementById("form-error").textContent = error;
//   }
// }

// function validateEmail(email) {
//   var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }

// document.getElementById("contact-form").addEventListener("submit", submitForm);