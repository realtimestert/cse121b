/* W05: Programming Tasks */
//https://byui-cse.github.io/cse121b-ww-course/resources/temples.json
/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement("article");
        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);
        article.appendChild(templeName);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
    
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    let url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
    const response = await fetch(url);
    if (response.ok){
        const templeList = await response.json();
        
        displayTemples(templeList);
    };
}

/* reset Function */
let reset = ()=> {
    templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter_ = document.querySelector("#sortBy").value;
    switch (filter_) {
        case "utah":
            console.log(filter_);
                break;
        case "notutah":
            console.log(filter_);
                break;
        case "older":
            console.log(filter_);
                break;
        case "all":
            console.log(filter_);
                break;
    }
}

getTemples();

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change",() => sortBy(templeList));