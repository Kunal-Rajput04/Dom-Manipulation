
const itemNameInput = document.getElementById('item-name');
const itemQuantityInput = document.getElementById('item-quantity');
const addItemButton = document.getElementById('add-item');
const shoppingList = document.getElementById('shopping-list');


function addItem() {
    const itemName = itemNameInput.value.trim();
    const itemQuantity = itemQuantityInput.value.trim();

    if (!itemName || !itemQuantity) {
        alert('Please enter both item name and quantity.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'shopping-list-item';

    listItem.innerHTML = `
        ${itemName} - ${itemQuantity}
        <button onclick="editItem(this)">Edit</button>
        <button onclick="removeItem(this)">Remove</button>
    `;

    shoppingList.appendChild(listItem);
    itemNameInput.value = '';
    itemQuantityInput.value = '';
}


function editItem(button) {
    const listItem = button.parentElement;
    const [itemName, itemQuantity] = listItem.childNodes[0].nodeValue.split(' - ');

    const newItemName = prompt('Edit item name:', itemName);
    const newItemQuantity = prompt('Edit item quantity:', itemQuantity);

    if (newItemName !== null && newItemQuantity !== null) {
        listItem.childNodes[0].nodeValue = `${newItemName} - ${newItemQuantity}`;
    }
}

function removeItem(button) {
    const listItem = button.parentElement;
    shoppingList.removeChild(listItem);
}


addItemButton.addEventListener('click', addItem);
