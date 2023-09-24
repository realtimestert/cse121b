/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Stuart Evans";
let currentYear = new Date();
const profilePicture = "me_and_dog.jpg";


/* Step 3 - Element Variables */
let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector("#year");
//let imageElement = document.getElementById(profilePicture);

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
textContent = currentYear;
let img_ = document.getElementsByTagName("img");
let imageElement = img_[0].setAttribute('src', profilePicture)

//const imageElement = img_[0].setAttribute("src", profilePicture);
img_[0].setAttribute("alt", `${profilePicture}`);
img_[0].setAttribute("title", `${profilePicture}`);


/* Step 5 - Array */
let Array = ["BBQ","Ribeye Steak","Cheese Pizza","Buttered Toast","Hibachi"]
let moreFood = "Bacon";

let elements = Array.length;
document.querySelector("#food").innerHTML = foodElement;




