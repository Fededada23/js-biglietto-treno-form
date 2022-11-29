
let button = document.getElementById('genera');
button.addEventListener('click', function(){
    let nome = document.getElementById('nome').value;
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    let prezzo = km * 0.21;

    if(eta == 'minorenne'){
    prezzo = prezzo - ((prezzo/100) * 20);
    console.log('l"eta è inferiore a 18 anni')
    }
    else if(eta == 'over'){
    prezzo = prezzo - ((prezzo/100) * 40);
    console.log('l"eta è superiore a 65 anni')
    }
    else {
    console.log('eta superiore ai 18 anni')
    }

    document.getElementById('prezzo').innerHTML = 'il tuo prezzo è ' + prezzo.toFixed(2)  + '€'
    document.getElementById('nome-passeggero').innerHTML = nome;


})
