let addBtn = document.querySelector('#add-btn');
let input = document.querySelector('#response');
let listGroup = document.querySelector('#list-group');
let listBox = document.querySelector('#list-box');

input.style.fontSize = "30px";

let addItems = function () {
    if(input.value == ``) {
        
    }
    else {
        listBox.style.border = 'solid pink 5px';
        listBox.style.paddingLeft = '15px';
        listBox.style.borderRadius = '50px';
        listBox.style.boxShadow = '0 0 30px pink';
        listBox.style.color = 'aliceblue';
        listBox.style.fontSize = '30px';
        let listItem = document.createElement('li');
        let deleteBtn = document.createElement('button');
        listItem.style.display = "flex";
        listItem.style.justifyContent = "space-between";
        deleteBtn.setAttribute('class','delete-btn');
        deleteBtn.innerText = "DELETE";
        deleteBtn.style.marginLeft = "50px";
        deleteBtn.style.marginRight = "10px";
        listItem.innerText = input.value;
        listGroup.insertAdjacentElement('beforeend',listItem);
        listItem.insertAdjacentElement('beforeend',deleteBtn);
        input.value = '';
        input.setAttribute('placeholder', 'Enter another value');

        let deletefun = function () {
            listItem.remove();
            let a = listGroup.childElementCount;
            if(a == 0) {
                listBox.style = 'none';
            }
        }
        deleteBtn.addEventListener('click', deletefun);
    }
};



input.addEventListener('click', function (event) {
    event.preventDefault();
    input.setAttribute('placeholder','');
});


addBtn.addEventListener('click',addItems);
