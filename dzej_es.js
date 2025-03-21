let zagadnienia = [ ] 
   for(let i = 0; i<30; i++){
    zagadnienia.push(i+1)
   }
  let  cala_tablica = new Array()
  
  
   function win_bingo(){
    let tablica = document.querySelectorAll('.batonik')
    tablica.forEach(element => {
      element.innerHTML += '<br>bingo'
      if (tablica.length == 25) {
    element.classList.add('big_win')
        }})
  }
    



  function table(x){
    
    let tablica = document.querySelectorAll('.batonik'), losowy
    console.log(tablica)
  
    tablica.forEach(element => {
      losowy = Math.random()*zagadnienia.length
      console.log(losowy)
      console.log(zagadnienia)
  
      element.innerHTML = zagadnienia.splice(losowy, 1)
    });
    console.log(cala_tablica)
    dodajEventListeners(x);
  
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
        element.innerHTML += '<td>'+'<button '+'id="'+j+','+i+'" class="batonik"></button></td>'
        
        cala_tablica[j+','+i] = false
      }
      j++
    });
    
    table(x)
  }
  
  
  function dodajEventListeners(x) {
    const tabela = document.querySelector('table'); // selektor tabeli
    const komórki = tabela.querySelectorAll('.batonik'); // selektor komórek tabeli
    let ilosc_true = 0
    komórki.forEach(komórka => {
      komórka.addEventListener('click', () => {
        komórka.classList.toggle('bingus')
        if(!(cala_tablica[komórka.id])){
          cala_tablica[komórka.id] = true  
          console.log(`checing ${komórka.id}, is ${cala_tablica[komórka.id]}`)
          ilosc_true++
          console.log(ilosc_true)
        }
        else{
          cala_tablica[komórka.id] = false  
            console.log(`checing ${komórka.id}, is ${cala_tablica[komórka.id]}`)
            ilosc_true--
            console.log(ilosc_true)
        }
          console.log(cala_tablica)
        chceck_bingo(x)

        });
      });
      
    
    
    };

  function chceck_bingo(x) {
    console.log('check_bingo');

      for (let i = 0; i < x; i++) {
      let rowBingo = true;
      for (let j = 0; j < x; j++) {
        if (!cala_tablica[i + ',' + j]) {
          rowBingo = false;
          break;
        }
      }
      if (rowBingo) {
        console.log('bingo');
        win_bingo(); 
        return;
      }
    }
  

    for (let j = 0; j < x; j++) {
      let colBingo = true;
      for (let i = 0; i < x; i++) {
        if (!cala_tablica[i + ',' + j]) {
          colBingo = false;
          break;
        }
      }
      if (colBingo) {
        console.log('bingo');
        win_bingo();
        return;
      }
    }

    let firstDiagonalBingo = true;
    for (let i = 0; i < x; i++) {
      if (!cala_tablica[i + ',' + i]) {
        firstDiagonalBingo = false;
        break;
      }
    }
    if (firstDiagonalBingo) {
      console.log('bingo');
      win_bingo();
      return;
    }
  
    
    let secondDiagonalBingo = true;
    for (let i = 0; i < x; i++) {
      if (!cala_tablica[i + ',' + (x - 1 - i)]) {
        secondDiagonalBingo = false;
        break;
      }
    }
    if (secondDiagonalBingo) {
      console.log('bingo');
      win_bingo();
      return;
    }
  }



  

  
  
  
  

  const but_p = document.querySelector('#p_p')
  const but_cz = document.querySelector('#cz_cz')
  const but_t = document.querySelector('#t_t')

  
  
  
  but_p.addEventListener('click', function(){tab_create(5)} )
  but_cz.addEventListener('click', function(){tab_create(4)})
  but_t.addEventListener('click', function(){tab_create(3)})
