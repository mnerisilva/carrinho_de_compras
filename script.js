const productsAll = document.querySelectorAll('.products ul li:last-child a');
const cart = document.querySelector('.cart')

console.log(productsAll);

const itensEscolhidos = [];

const dados_produto_escolhido = [];

const productCart = [];

const arrStatus = [];

productsAll.forEach(function(produto){
    produto.addEventListener('click', productAdd);
})
let quantidade = 0;
let _index = 0;

let teste = false;

function productAdd(event){
    event.preventDefault();
    let _this = this;
    let _idProduto = _this.dataset.id;
    //if (dados_produto_escolhido.includes(_idProduto)){
        console.log('ID DO PRODUTO: ' + _idProduto);
        console.log('TIPO ID DO PRODUTO: ' + typeof _idProduto);
        console.log('teste: ' + teste);
        console.log('tipo teste: ' + typeof teste);
        if(productCart.length > 0){
            teste = productSearch(_idProduto);
            console.log('JÁ EXISTE PRODUTO NO CARRINHO. SAINDO DA APLICAÇÃO. ' + teste);            
            /*quantidade = parseInt(dados_produto_escolhido[1]);
            console.log('quantidade: ' + quantidade);

            alert('produto já existe: ' + quantidade)
            cart.querySelector('ul [data-idProduto="'+_idProduto+'"] li input').value = quantidade;
            quantidade = 0;*/
            return;
                    
        } else {
            console.log('CONTINUEI...');
            const ulPai = _this.parentNode.parentNode;
            quantidade++;
            const primeiraLi = ulPai.querySelector('li:first-child');
            let produto = ulPai.querySelector('li:nth-child(2) span').textContent;
            let preco = ulPai.querySelector('li:nth-child(3) span').textContent;
            let condicoes = ulPai.querySelector('li:nth-child(4) span').textContent;
            //console.log('cliquei aqui: ' + _this.dataset.id);
            //console.log('cliquei aqui: ' + condicoes);

            itensEscolhidos.push(_idProduto);
            dados_produto_escolhido.push({
                'idProduto' : _idProduto,
                'quantidade' : quantidade,
                'produto' : produto,
                'preco' : preco,
                'condicoes' : condicoes
            })

            productCart.push({
                'idProduto' : _idProduto,
                'quantidade' : quantidade,
                'produto' : produto,
                'preco' : preco,
                'condicoes' : condicoes
            })
            //console.log(itensEscolhidos);
            //console.log(dados_produto_escolhido);

            console.log('productCart: ' + productCart.toString());

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


function productSearch(produtoId){
    productCart.map((item, index) => {
        console.log('ITEM.IDPRODUCT' + item.idProduto)
        if(item.idProduto === produtoId){
            console.log('produto já EXISTE')
            _index = index;
            teste = true;
            arrStatus[0] = teste;
            arrStatus[1] = index;
        }
    });
    
    return arrStatus;
    
}
