/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
 Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe 
 non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
 - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
  Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri
consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato
 su una cella che non era una bomba.*/

 const zone = document.getElementById('grid');
 const button = document.getElementById('button');
 const col = 10;
 const rows = 10;
 const total = col * rows;
 const point = [];
 let j = 1;
 let blacklist =[];

function createCell(x){
    let cell;
    cell = document.createElement("div");
    cell.append(x);
    cell.classList.add('cell');
    return cell;
}

function getRandomNumber(min, max, blackList) {
    let randomNumber;
    do{
        randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
    }while(blackList.includes(randomNumber));
    return randomNumber;
}
for(i=0; i<=15; i++){
    const random = getRandomNumber(1, 16, blacklist);
console.log(random);
}




//Creazione delle celle
   button.addEventListener('click',function(){
    
    for(let i=1;i<=total;i++){
        const cell = createCell(i);
        //Aggiunto la possibilità di cambiare colore alle caselle
        cell.addEventListener('click', function(){
            cell.classList.add('clicked');
            console.log(i);
        //Aggiunta punteggio 
            point.push(j++);
            console.log(point);
        });
        zone.appendChild(cell);
    }
}); 





 