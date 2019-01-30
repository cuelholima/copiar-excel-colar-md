let copiarTexto = () =>{
    //captura o elemento input
    const editor = document.querySelector("#editor");
    
    //seleciona todo o texto do elemento
    editor.select();
    //executa o comando copy
    //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy');
};

let apagarTexto = () =>{
    const editor = document.querySelector("#editor");
    editor.select();
    document.execCommand('delete');
};