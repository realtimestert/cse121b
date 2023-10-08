/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Stuart Evans",
    photo: "me_and_dog.jpg",
    favoriteFoods: [
        "BBQ",
        "Ribeye Steak",
        "NY Style Cheese Pizza",
        "Buttered Toast",
        "Mongolian BBQ",
        "Bacon"
    ],
    hobbies: [
        "Retro Gaming",
        "CRT TV's",
        "Board Games"
    ],
    placesLived: []
};
       
/* Populate Profile Object with placesLive objects */
//I've lived lots of places lol.
myProfile.placesLived.push(
    {
        place: "Riverside, CA",
        length: "4 years"
    }
)
myProfile.placesLived.push(
    {
        place: "San Jacinto, CA",
        length: "15 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Campinas, Brazil",
        length: "2 years"
    }
)
myProfile.placesLived.push(
    {
        place: "Rexburg, ID",
        length: "2 years"
    }
)       
myProfile.placesLived.push(
    {
        place: "Hemet, CA",
        length: "1 year"
    }
)        
myProfile.placesLived.push(
    {
        place: "Logan, UT",
        length: "2 years"
    }
)      
myProfile.placesLived.push(
    {
        place: "Ogden UT",
        length: "1 year"
    }
)       
myProfile.placesLived.push(
    {
        place: "Valdosta, GA",
        length: "6 years"
    }
)      
myProfile.placesLived.push(
    {
        place: "Athens, GA",
        length: "2 years"
    }
)  

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
const photoELement = document.getElementById("photo");
photoELement.src = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let ul = document.createElement("ul");
    ul.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(item => {
    let placesLived = document.querySelector("#places-lived");
    let dt_ = document.createElement("dt");
    let dd_ = document.createElement("dd");
    dt_.innerHTML = item.place;
    dd_.innerHTML = item.length;
    placesLived.append(dt_, dd_);
})

