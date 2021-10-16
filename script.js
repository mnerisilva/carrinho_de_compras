const productsAll = document.querySelectorAll('.products ul li:last-child a');
const cart = document.querySelector('.cart')

console.log(productsAll);

const itensEscolhidos = []

const dados_produto_escolhido = []

productsAll.forEach(function(produto){
    produto.addEventListener('click', productAdd);
})
let quantidade = 0;

function productAdd(event){
    event.preventDefault();
    let _this = this;
    let _idProduto = _this.dataset.id;
    if (dados_produto_escolhido.includes(_idProduto)){
        console.log('PRODUTO JÁ EXISTE');
        quantidade = parseInt(dados_produto_escolhido[1]);
        console.log('quantidade: ' + quantidade);

        alert('produto já existe: ' + quantidade)
        cart.querySelector('ul[data-idProduto="'+_idProduto+'"] li input').value = quantidade;
        quantidade = 0;

        return;
    } else {
        console.log('CONTINUEI...');
    const ulPai = _this.parentNode.parentNode;
    quantidade++;
    const primeiraLi = ulPai.querySelector('li:first-child');
    let produto = ulPai.querySelector('li:nth-child(2) span').textContent;
    let preco = ulPai.querySelector('li:nth-child(3) span').textContent;
    let condicoes = ulPai.querySelector('li:nth-child(4) span').textContent;
    console.log('cliquei aqui: ' + _this.dataset.id);
    console.log('cliquei aqui: ' + condicoes);

    itensEscolhidos.push(_idProduto);
    dados_produto_escolhido.push({
        'idProduto' : _idProduto,
        'quantidade' : quantidade,
        'produto' : produto,
        'preco' : preco,
        'condicoes' : condicoes
    })
    console.log(itensEscolhidos);
    console.log(dados_produto_escolhido);

    let _htmlContent = cart.innerHTML;

    cart.innerHTML = _htmlContent + `<ul data-idProduto="${_idProduto}"">
        <li><img src="images/img-0${_idProduto}-p.jpg" alt="produto"></li>
        <li><p class="desc_prod_cart">${produto}</p></li>
        <li><input type="text" maxlength="3" width="3" value="${quantidade}" /></li></li>
        <li><span>R$ </span><p class="desc_prod_cart">${preco}</p></li>
        <li></li>
    </ul>`;

   
    
        }

    
    
  
}

