let zagadnienia = [ ] 
   for(let i = 0; i<30; i++){
    zagadnienia.push(i+1)
   }

   const przycisk = document.querySelector('button');
   const mijesce = document.querySelector('#miejsce');
   przycisk.addEventListener('click', ()=>{
    let los = Math.floor(Math.random()*zagadnienia.length)
    let zagadnienie = zagadnienia[los]
    console.log(zagadnienie)
    mijesce.innerHTML = zagadnienie
    zagadnienia.splice(los,1)
    
    if(zagadnienia.length === 0){
        mijesce.textContent = 'Koniec'
        mijesce.style.width = '250px'
    }
   })