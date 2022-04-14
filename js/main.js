function Contador(){


// Primeiro vamos solucionar os elemento do html e criar alumas variavel

let relogio = document.querySelector('.relogio')
let segundos = 0 // segundos para usar como ponto inicial dos segundos.
let timer; // timer para poder para o interval



//Criando um função de horas para para comeca contar

function CriarHorasDosSegundo(){
  let data = new Date(segundos * 1000)
  return data.toLocaleTimeString('pt-br',{
    hour12:false,
    timeZone:'UTC'
  })
}

// essa funcao iniciar com o set interval
function IniciarRelogio(){
  timer = setInterval(()=>{
    segundos++
    relogio.innerHTML = CriarHorasDosSegundo(segundos)
  },1000)
}


document.addEventListener('click', function(e){
    let el = e.target  //Aqui eu consigo saber onde esta sendo clicavel
    
    // agora pegando os elementos vou fazer uma condiçoes

    //Se tiver o elemento zerar adiciona essa logica
    if(el.classList.contains('zerar')){
      clearInterval(timer)
  
      relogio.classList.add('atencao')
      relogio.innerHTML='00:00:00'
      segundos=0
      
    }
    //Se tiver o elemento iniciar adiciona essa logica
    if(el.classList.contains('iniciar')){
      relogio.classList.remove('atencao')
      relogio.classList.remove('stop')
      relogio.classList.add('play')
    
      clearInterval(timer) //aqui eu bloqueio o timer de repetir direito
      IniciarRelogio()
    }
    //Se tiver o elemento Pausar adiciona essa logica
    if(el.classList.contains('pausar')){
      clearInterval(timer)

      relogio.classList.remove('atencao')
      relogio.classList.remove('play')
      relogio.classList.add('stop')
    }

})



}


Contador()