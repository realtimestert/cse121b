/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    let article = document.createElement("article");

}
//for each temple in temples
templesElement.appendChild(article);


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    let url = "https://byui-cse.github.io/cse121b-ww-course/resources/tesmples.json";
    const response = await fetch(url);
    if (response.ok){
        const templeList = await response.json();
        displayTemples(templeList);
    }
};

/* reset Function */
let reset = ()=> {
    templesElement.innerHTML = "";
}

/* sortBy Function */



getTemples();

/* Event Listener */
