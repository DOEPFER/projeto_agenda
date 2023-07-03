const frm_contacts = document.getElementById('frm_contacts');
const names = [];
const tels = [];

let registers = '';

frm_contacts.addEventListener('submit', function (e) {
    e.preventDefault();

    addContact();
    updateTable();
    updateContactsCount();
});

function addContact () {
    const inputName = document.getElementById('name');
    const inputTel = document.getElementById('tel');

    if (names.includes(inputName.value)){
        alert(`Já existe um com contato com nome: ${inputName.value}.`);
    } else if (tels.includes(inputTel.value)) {
        alert(`Já existe um com contato com o telefone: ${inputTel.value}.`);
    } else {
        names.push(inputName.value);
        tels.push(inputTel.value);

        let register =
            `
            <tr>
                <td>${inputName.value}</td>
                <td>${inputTel.value}</td>
            </tr>
            `;
    
        registers += register;
    };

    inputName.value = '';
    inputTel.value = '';
};

function updateTable () {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = registers;
};

function updateContactsCount () {
    document.getElementById('contacts_count').innerHTML = tels.length;
};