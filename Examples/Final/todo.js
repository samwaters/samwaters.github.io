document.getElementById('newitem_input').onkeyup = (e) => {
    if(e.target.value)
        document.getElementById('newitem_button').removeAttribute('disabled')
    else
        document.getElementById('newitem_button').setAttribute('disabled', 'true')
}

const checkboxClick = (e) => {
    if(e.target.checked) {
        e.target.parentNode.parentNode.className = 'done';
    } else {
        e.target.parentNode.parentNode.className = '';
    }
}

const removeClick = (e) => {
    document.getElementById('todo_list_body').removeChild(e.target.parentNode.parentNode)
}

document.getElementById('newitem_button').onclick = () => {
    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var checkbox = document.createElement('input');
    checkbox.onclick = checkboxClick;
    checkbox.type = 'checkbox'
    td1.appendChild(checkbox)
    var td2 = document.createElement('td');
    td2.innerHTML = document.getElementById('newitem_input').value;
    var td3 = document.createElement('td');
    var removeButton = document.createElement('button')
    removeButton.onclick = removeClick;
    removeButton.className = 'removeButton';
    removeButton.innerText = 'X'
    td3.appendChild(removeButton);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    document.getElementById('todo_list_body').appendChild(row);
    document.getElementById('newitem_input').value = '';
    document.getElementById('newitem_button').setAttribute('disabled', 'true')
}

