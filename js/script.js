//valorTotal da soma dos produtos iniciarão com a quantidade 0
var valorTotal = [0,0];

var valorProduto = [50.00,30.00];

//qtd de produtos selecionados
var qtd = [0,0];

//item significa o primeiro produto que está sendo repesentado pelo 0 produto0
function adicionarItem(item){

    //qual é a quantidade que eu quero pegar a quantidade 0 que esta sendo representada pelo item
    var quantidade = document.getElementById('quantidade' + item);
    var total = document.getElementById('total' + item);

    //pega o cara qtd e coloca o item representando o item 0 no momento
    qtd[item] += 1;

    //pega o valortotal item que é o primeiro valor, transforma em parseFloat e adiciona o
    //valorProduto[0] que é 50.00 por exemplo | pega o valorProduto posição [0]
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];

    //para alterar dentro do HTML a quantidade e o total
    //aqui quero que sejá mostrado o valor que está no meu array qtd
    quantidade.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    // fazer isso para que essa function sempre seja execudada quanto colocar um produto
    valorCompra()
}

function removerItem(item){
    if(qtd[item] > 0){
        qtd[item] -= 1;
        var quantidade = document.getElementById('quantidade' + item);
        var total = document.getElementById('total' + item);

        valorTotal[item] = Number.parseFloat(valorProduto[item]) / qtd[item];
        quantidade.innerHTML = qtd[item];
        total.innerHTML = valorTotal[item].toFixed(2);
    } else {
        alert("A quantidade está zerada");
    }
    // fazer isso para que essa function sempre seja execudada quanto tirar um produto
    valorCompra();
}

function valorCompra(){

    var valorTotalCompra = document.getElementById('valorTotalCompra');
    var valor = 0;

    // i é menor que o tamanho do valorTotal?
    for(var i = 0; i < valorTotal.length; i++){
        valor += valorTotal[i];
    }

    valorTotalCompra.innerHTML = valor.toFixed(2);
}