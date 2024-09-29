const button = document.getElementById("button1");
const input = document.getElementById("task");
const list = document.querySelector(".list");

button.onclick = () => {
    if (input.value === "") {
        alert("The input field should not be empty!!");
    } else {
        const value1 = document.getElementById('task').value;
        input.value = ''; 
        const ulelement = document.createElement('ul');
        
        if (value1.trim() !== '') {
            const li = document.createElement('li');  
            const label = document.createElement('label');
            label.style.backgroundColor=' rgb(40, 38, 38)'
            label.style.fontSize='30px'

            const input1 = document.createElement('input');
            
            input1.type = 'radio';
            input1.style.marginRight = '10px';
            input1.name = 'tasks';  
            
            const deleteli=document.createElement('span');
            deleteli.innerHTML='❌';
            deleteli.style.color='red';
            deleteli.style.cursor='pointer';
            deleteli.style.textAlign='end'
            
            deleteli.onclick=function(){
                ulelement.remove();
            }
            label.appendChild(input1);
            label.appendChild(document.createTextNode(value1));
            li.appendChild(label);
            label.style.width='350px'
            li.appendChild(deleteli);
            li.style.display='flex';
            ulelement.appendChild(li);
            list.appendChild(ulelement);
            
            input1.addEventListener('change', function () {
                if (input1.checked) {
                    label.style.color = 'green';  
                    label.style.textDecoration='line-through'
                } else {
                    label.style.color = 'white'; 
                }
            });
        }
    }
};
