function trocarCores() {

    let itens = document.getElementsByTagName('li');

    for (let i = 0; i < itens.length; i++) {
        let item = itens[i]; 

        if (item.classList.contains('azul')) {
            item.classList.remove('azul');
            item.classList.add('vermelho');
            
            /* item.innerHTML = "Item Vermelho "; */
        } else {
            item.classList.remove('vermelho');
            item.classList.add('azul');
            
            /* item.textContent = "Item Azul "; */
        }
    }
}