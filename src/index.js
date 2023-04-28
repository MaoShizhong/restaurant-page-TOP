import { createHome } from "./home.js";

console.log("This is working!");

const tabs = document.querySelectorAll('nav button');
tabs.forEach(tab => tab.addEventListener('click', generateContent));

function generateContent(e) {
    switch (e.target.value) {
        case 'home':
            createHome();
            break;
        case 'menu':
            generateMenu();
            break;
        case 'contact':
            generateContact();
            break;
    }
}

// initialise
// createHome();