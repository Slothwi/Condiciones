const verificar = () => {
    const cant01 = document.querySelector('#opc-1').value
    const cant02 = document.querySelector('#opc-2').value
    const cant03 = document.querySelector('#opc-3').value

    const total = (cant01) + (cant02) + (cant03)
    
    if(total == 911) {
        respuesta.innerHTML = "Password 1 correcto"
    } else if(total == 714) { 
        respuesta.innerHTML = "Password 2 correcto"
    } else if(total != 714,911) {
        respuesta.innerHTML = "Password incorrecto"
    }
    
}