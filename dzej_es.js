 let binsza = [
  'kłutnia z Gibkiem',
  'rozmowa przez telefon',
  'to nie działa',
  'nieobecni check',
  'ocen brakuje',
  'oceniam negatywnie',
  'szwendacz',
  'om niom niom',
  'wyrzućcie to...',
  'radio',
  'zaczepka',
  'nie było jeszcze dzwonka',
  'tego nie bedzie na egzaminie',
  'przygaście monitory',
  'yyy...',
  'dyżurny',
  'a co ty robisz?',
  'sonar',
  'wy też nie macie internetu ?'
] 
 
let  cala_tablica = []


function table(){
  
  let tablica = document.querySelectorAll('.batonik'), losowy
  console.log(tablica)

  tablica.forEach(element => {
    losowy = Math.random()*binsza.length
    console.log(losowy)
    console.log(binsza)

    element.innerHTML = binsza.splice(losowy, 1)
  });
  console.log(cala_tablica)
  dodajEventListeners();

}


function tab_create(x){
  let j = 0;
  document.querySelector('main').innerHTML = '<table id="pole_tab"></table>'
  let tab_szkielet = document.querySelector('table')
  for(let i = 0; i<x;i++){
    tab_szkielet.innerHTML += '<tr id="trow'+i+'"></tr>' 
  }


  let tablica = document.querySelectorAll('tr')
  tablica.forEach(element => {
    for(let i = 0; i<x;i++){
      element.innerHTML += '<td>'+'<button '+'id="t'+j+'_'+i+'" class="batonik"></button></td>'
      cala_tablica.push('tdes'+j+'_'+i)
    }
    j++
  });
  
  
  this.globalna = 'test globalnej'
  table()
}


function dodajEventListeners() {
  const tabela = document.querySelector('table'); // selektor tabeli
  const komórki = tabela.querySelectorAll('.batonik'); // selektor komórek tabeli
  komórki.forEach(komórka => {
    komórka.addEventListener('click', () => {
      komórka.classList.toggle('bingus')
    });
  });
}




function toglle(){
  console.log(window.globalna)
}




const but_p = document.querySelector('#p_p')
const but_cz = document.querySelector('#cz_cz')
const but_t = document.querySelector('#t_t')




but_p.addEventListener('click', function(){tab_create(5)} )
but_cz.addEventListener('click', function(){tab_create(4)})
but_t.addEventListener('click', function(){tab_create(3)})

