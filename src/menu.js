import svg from './methods.svg';

export function generateMenu() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    const beans = createBeansDiv();
    const method = createMethodDiv();
    const espresso = createEspressoDiv();

    menu.appendChild(beans);
    menu.appendChild(method);
    menu.appendChild(espresso);

    content.appendChild(menu);
}

function createBeansDiv() {
    const gridContents = {
        'Guatemalan Monte Rosa': 'A slow-growing, high-altitude bean that provides a full body with rich, smooth chocolatey, nutty notes.',
        'Ethiopian Rocko Mountain': 'A light-medium roast that shows off an enormous complexity of fruity and floral notes, with a subtle hint of wine.',
        'Monsoon Malabar': 'Dark and heavy - these beans boast a deep, smokey, spicy flavour profile.',
        'Brazilian Monte Cristo': 'This full-bodied blend gives a subtle sweetness and delicate acidity with a unique aftertaste of cocoa and vanilla.',
        'Old Brown Java': 'For the bold! Strong and heavy with little complexity, this is all about the rich intensity and depth of flavour.',
        'Colombian Supremo': 'A classic medium-roasted all-rounder. Well-balanced, smooth and with notes of chocolate and caramel.',
    };

    const div = document.createElement('div');
    div.setAttribute('id', 'pick-bean');

    const heading = document.createElement('h1');
    heading.textContent = 'Choose your beans';
    const grid = createGrid(gridContents);

    div.appendChild(heading);
    div.appendChild(grid);

    return div;
}

function createMethodDiv() {
    const div = document.createElement('div');
    div.setAttribute('id', 'method');

    const heading = document.createElement('h1');
    const methods = document.createElement('div');
    const methodsArr = ['Aeropress', 'Pour-over', 'French press'];
    const price = document.createElement('h2');

    heading.textContent = 'Choose a classic brewing method';
    methodsArr.forEach(method => {
        const p = document.createElement('p');
        p.textContent = method;
        methods.appendChild(p);
    });
    price.textContent = 'Mug (200ml) - £2.99';
    
    div.appendChild(heading);
    div.innerHTML += svg;
    div.appendChild(methods);
    div.appendChild(price);

    return div;
}

function createEspressoDiv() {
    const gridContents = {
        'Americano': 'Hot water poured over a shot of espresso.',
        'Flat White': 'Espresso, steamed milk with a delicate layer of frothy milk to top.',
        'Caffè Latte': 'A shot of espresso, steamed milk and a fine layer of foamed milk on top, though more than a flat white.',
        'Cappuccino': 'Related to the latte but with equal parts steamed milk and foamed milk - show off your foamstache!',
        'Mocha': 'A shot of espresso mixed with chocolate syrup, steamed milk then topped with foamed milk and cocoa powder.',
    };

    const div = document.createElement('div');
    div.setAttribute('id', 'espresso');

    const heading = document.createElement('h1');
    const price = document.createElement('h2');
    heading.textContent = 'Or choose an espresso-based drink';
    price.textContent = 'Regular (340ml) - £3.99 / Large (455ml) - £4.79';
    const grid = createGrid(gridContents, true);

    div.appendChild(heading);
    div.appendChild(price);
    div.appendChild(grid);

    return div;
}

function createGrid(contents, espresso = false) {
    const grid = document.createElement('div');
    grid.classList.add('grid');

    for (const heading in contents) {
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        h3.textContent = heading;
        p.textContent = contents[heading];

        div.appendChild(h3);
        div.appendChild(p);
        grid.appendChild(div);
    }

    if (espresso) {
        const div = document.createElement('div');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerHTML = '<b>Espresso</b> - £2.29';
        p2.innerHTML = '<b>Ristretto</b> - £2.29';
        p3.innerHTML = '<b>Macchiato</b> - £2.49';

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        grid.appendChild(div);
    }

    return grid;
}