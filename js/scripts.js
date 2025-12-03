function trocarCores() {

    let itens = document.querySelectorAll('li');

    itens.forEach(item => {

        if (item.classList.contains('azul')) {
            item.classList.remove('azul');
            item.classList.add('vermelho');
        } else {
            item.classList.remove('vermelho');
            item.classList.add('azul');
        }
    });
}