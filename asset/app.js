const body= document.querySelector(".body");
const ctn = document.createElement('div');
body.appendChild(ctn);
const titre =document.createElement('h3');
titre.innerText ='En poursuivant, vous acceptez l\'utilisation de cookies par le site afin de vous proposer des contenus adaptés et réaliser des statistiques.';
ctn.appendChild(titre);
const btn = document.createElement('button');
btn.innerText = 'Accepter les cookies';
ctn.appendChild(btn);
const text = document.createElement('p');
text.innerText ='Paramétrer les cookies';
ctn.appendChild(text);
console.log(body,ctn,text,btn);
btn.classList.add('btn');
ctn.classList.add ('ctn');
btn.addEventListener('click',()=>{
    ctn.style.display ='none';
})