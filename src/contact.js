export function generateContact() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');

    const address = createAddressDiv();
    const form = createForm();

    contact.appendChild(address);
    contact.appendChild(form);

    content.appendChild(contact);
}

function createAddressDiv() {
    const div = document.createElement('div');
    div.setAttribute('id', 'address');

    const addressLines = [
        '<b>Find us at:</b>',
        '64 Zoo Lane',
        'Zoocester',
        'Animalshire',
        'CH33 7AH',
        'Tel: 02864 646464',
        '<b>Open:</b><br>Mon-Sun / 07:00-19:30',
    ];

    addressLines.forEach(line => {
        const p = document.createElement('p');
        p.innerHTML = line;
        div.appendChild(p);
    });

    return div;
}

function createForm() {
    const form = document.createElement('form');
    setAttributes(form, {'action': '#', 'method': 'post'});

    const name = document.createElement('input');
    const email = document.createElement('input');
    const message = document.createElement('textarea');
    const btn = document.createElement('button');

    setAttributes(name, {
        'id': 'name',
        'name': 'name',
        'type': 'text',
        'autocomplete': 'off',
        'placeholder': 'Name (required)',
        'autofocus': true,
        'required': true,
    });
    setAttributes(email, {
        'id': 'email',
        'name': 'email',
        'type': 'email',
        'autocomplete': 'off',
        'placeholder': 'Email (required)',
        'required': true,
    });
    setAttributes(message, {
        'id': 'message',
        'name': 'message',
        'rows': '10',
        'cols': '60',
        'placeholder': 'Enter message here (required)',
        'required': true,
    });
    btn.setAttribute('type', 'submit');
    btn.textContent = 'Fake send';
    btn.addEventListener('click', e => e.preventDefault());

    const formEls = [name, email, message, btn];
    formEls.forEach(el => form.appendChild(el));

    return form;
}

function setAttributes(el, attributes) {
    Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value));
}