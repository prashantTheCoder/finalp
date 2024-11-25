const accessKey = "KRRdPiZUkTvEcrNUyih8c4LynK9bwg_Oom_RYDREOfc";
const form_ele = document.querySelector('form');
const input_ele = document.querySelector('.search-input');
const card_container_ele = document.querySelector('.card-container');
const show_more_ele = document.querySelector('.show-more');

let inputData = ''; // Global variable to store input data
let page = 1;

async function searchImages() {
    inputData = input_ele.value; // Use the global variable instead of redeclaring
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1) {
        card_container_ele.innerHTML = "";
    }

    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("card");
        imageWrapper.classList.add("Patna-Museum-description");
     
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        card_container_ele.appendChild(imageWrapper);
    });

    page++;

    if (page > 1) {
        show_more_ele.style.display = "block";
    }
}

form_ele.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

show_more_ele.addEventListener("click", () => {
    searchImages();
});

