// media query for phone view
let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let inputC = document.querySelector('#inputC')

if (window.matchMedia("(max-width: 700px)").matches){
  inputA.classList.remove('s4')
  inputA.classList.add('s12')

  inputB.classList.remove('s4')
  inputB.classList.add('s12')

  inputC.classList.remove('s4')
  inputC.classList.add('s12')
}

// Algorithm that resolves a quadratic equation with the general formula
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let calcBtn = document.querySelector('#calcBtn')
let resultDisplay = document.querySelector('#resultDisplay')

calcBtn.addEventListener('click' , (event) => {
  event.preventDefault()

  let a1 = a.value
  let b1 = b.value
  let c1 = c.value

  if ((a1 === 0) || (a1 === '0')) {
    resultDisplay.innerHTML = "imposible de resolver"
    return
  }
  
  let bPotencia = Math.pow(b1 , 2)
  let cuatroAC = (4 * a1 * c1)
  let resultadoParaRaiz = bPotencia - cuatroAC
  let raiz = Math.sqrt(resultadoParaRaiz)
  let debajoEcuacion = (2 * a1)

  if ( (isNaN(raiz) === true) ){
    resultDisplay.innerHTML = "imposible de resolver"
  } else {
    let x1 = (-b1 + raiz ) / debajoEcuacion
    let x2 = (-b1 - raiz) / debajoEcuacion
    resultDisplay.innerHTML = `X = ${x1.toFixed(5)} o X = ${x2.toFixed(5)}`
  }
})

