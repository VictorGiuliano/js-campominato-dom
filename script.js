/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console
 con il numero della cella cliccata.*/

 const zone = document.getElementById('grid');
 const button = document.getElementById('button');
 const col = 10;
 const rows = 10;
 const total = col * rows;
 let isOnly = false;

console.log(isOnly);

function createCell(x){
    let cell;
    cell = document.createElement("div");
    cell.append(x);
    cell.classList.add('cell');
    return cell;
}


//Creazione delle celle
if( isOnly == false){
   button.addEventListener('click',function(){
    
    for(let i=1;i<=total;i++){
        const cell = createCell(i);
        //Aggiunto la possibilità di cambiare colore alle caselle
        cell.addEventListener('click', function(){
            cell.classList.add('clicked');
            console.log(i);
        });
        zone.appendChild(cell);
    }
}); 
}


  

 