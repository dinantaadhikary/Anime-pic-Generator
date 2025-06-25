const btnE1 = document.getElementById("btn");
const animeContainerE1 = document.querySelector(".anime-container")
const animeImgE1 = document.querySelector(".anime-img")
const animeNameE1 = document.querySelector(".anime-name")

btnE1.addEventListener("click", async function(){
    try {
        btnE1.disabled = true;
        btnE1.innerText = "Loading....";
        animeNameE1.innerText = "Updating...";
        animeImgE1.src = "spinner.svg";
        const response = await fetch("https://nekos.best/api/v2/neko")
        const data = await response.json();
        console.log(data);
        btnE1.disabled = false;
        btnE1.innerText = "Get Anime";
        animeContainerE1.style.display = "block";
        animeImgE1.src = data.results[0].url;
        animeNameE1.innerText = data.results[0].artist_name;
    } catch (error) {
        console.log(error);
        btnE1.disabled = false;
        btnE1.innerText = "Get Anime";
        animeNameE1.innerText = "An error happened, please try again";
        
    }
})