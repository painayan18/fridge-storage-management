document.getElementById('item-form').addEventListener('submit', function(e) {
  e.preventDefault();

  var itemNameInput = document.getElementById('item-name');
  var itemQuantityInput = document.getElementById('item-quantity');

  var itemName = itemNameInput.value;
  var itemQuantity = itemQuantityInput.value;

  if (itemName.trim() === '' || itemQuantity.trim() === '') {
    return;
  }

  var listItem = document.createElement('li');
  var itemInfo = document.createElement('span');
  itemInfo.textContent = itemName + ': ' + itemQuantity;
  listItem.appendChild(itemInfo);

  document.getElementById('item-list').appendChild(listItem);

  itemNameInput.value = '';
  itemQuantityInput.value = '';
});
