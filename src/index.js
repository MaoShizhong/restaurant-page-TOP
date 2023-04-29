import { generateHome } from "./home.js";
import { generateContact } from "./contact.js";
import { generateMenu } from "./menu.js";
import './style.css';

console.log("This is working!");

const tabs = document.querySelectorAll('nav button');
tabs.forEach(tab => tab.addEventListener('click', generateContent));

function generateContent(e) {
    switch (e.target.value) {
        case 'home':
            generateHome();
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
generateHome();