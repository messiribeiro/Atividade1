const textarea = getElement('#original')
const modificado = getElement("#modificado")
let letterCounter = []

let boldCheck = getElement('#bold')
let italic = getElement('#italic')
let color = getElement('#color')
const select = getElement("#efeito")



//Mudando a cor
color.addEventListener('change', () => {
    modificado.style.color = color.value
})

function modifyAndRender() {
    render(textarea.value.length)
    caseModify()
}


//Adicionando o evento de keyup e keydown
textarea.addEventListener('keyup', () => {
    modifyAndRender()
})
textarea.addEventListener('keydown', () => {
    modifyAndRender()
})


//Verificando se algum checkbox foi clicado
boldCheck.addEventListener('click', () => changeBold(boldCheck.checked))
italic.addEventListener('click', () => changeItalic(italic.checked))


//Verificando se o valor do select foi alterado
select.addEventListener('change', () => {
    //Se foi alterado, chamamos a função q modifica o texto novamente
    caseModify()
})


//Função que muda o texto de minúsulo para maiúsculo e de maiúsculo para minúsculo
function caseModify () {
    if (select.value == 'lowercase') modificado.value = textarea.value.toLowerCase()
    else modificado.value = textarea.value.toUpperCase()

}


//Função que é chamada assim que o checkbox do negrito é clicado
function changeBold(checked) {
    //Verificando se o checkbox está marcado ou desmarcado
    if(checked) {
        console.log('negritado')  
        console.log(modificado.style.fontWeight)    


        modificado.style.fontWeight = "bold";
    }else {
        modificado.style.fontWeight = "normal";
        console.log('desnegritado')
        
    }

}

//Função que é chamada assim que o checkbox do itálico é clicado
function changeItalic(checked) {
    //Verificando se o checkbox está marcado ou desmarcado
    if(checked) {
        console.log('italicado')  

        modificado.style.fontStyle = "italic";
    }else {
        modificado.style.fontStyle = "normal";
        console.log('destalicado')
        
    }

}

//Função que renderiza o número de caracteres digitados
function render(value) {
    const span = getElement("#letterCounter")
    span.innerHTML = value
}


//Função criada para deixar a chamada de elementos do html mais simples
function getElement(elementIDorClass) {
    const element = document.querySelector(elementIDorClass)
    return element
}


