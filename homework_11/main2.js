// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
let h1=document.querySelector('h1');
h1.style.textAlign='center';
let url = new URL(location.href);
let id = url.searchParams.get('id');
let divCont = document.createElement("div");
divCont.classList.add('container');
document.body.appendChild(divCont);
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then(info => {
            let ul = document.createElement('ul');
            ul.classList.add('userInfo');
            for (const elem in info) {
                let li = document.createElement('li');
                if (typeof (info[elem]) === 'object') {
                    li.innerHTML = `<strong>${elem}:</strong>`;
                } else {
                    li.innerHTML  = `<strong>${elem}:</strong> ${info[elem]}`
                }
                if (typeof (info[elem]) === 'object') {
                    let ul1 = document.createElement('ul');
                    for (const element in info[elem]) {
                        let li1 = document.createElement('li');
                        if (typeof (info[elem][element]) === 'object') {
                            li1.innerHTML = `<strong>${element}:</strong>`
                        } else {
                            li1.innerHTML = `<strong>${element}:</strong> ${info[elem][element]}`
                        }
                        ul1.appendChild(li1);
                        if (typeof (info[elem][element]) === 'object') {
                            let ul2 = document.createElement('ul');
                            for (const inf in info[elem][element]) {
                                let li2 = document.createElement('li');
                                li2.innerHTML  = `<strong>${inf}:</strong> ${info[elem][element][inf]}`;
                                ul2.appendChild(li2);
                            }
                            li1.appendChild(ul2);
                        }
                    }
                    li.appendChild(ul1);
                }
                ul.appendChild(li);
                divCont.appendChild(ul);
            }
        }
    );
let button = document.createElement('button');
button.innerText='Go to users';
button.onclick = function (e) {
    e.defaultPrevented;
    window.location.href = 'users.html';
}
document.body.appendChild(button);