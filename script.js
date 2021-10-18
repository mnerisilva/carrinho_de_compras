const productsAll = document.querySelectorAll('.products ul li:last-child a');
const cart = document.querySelector('.cart')

console.log(productsAll);



const productCart = [];

let arrStatus = [];

productsAll.forEach(function(produto){
    produto.addEventListener('click', productAdd);
})
let quantidade = 0;
let _index = 0;

let teste = [];

function productAdd(event){
    event.preventDefault();
    let _this = this;
    let _idProduto = _this.dataset.id;
    //if (dados_produto_escolhido.includes(_idProduto)){
        console.log('ID DO PRODUTO: ' + _idProduto);
        console.log('TIPO ID DO PRODUTO: ' + typeof _idProduto);
        console.log('teste: ' + teste);
        console.log('tipo teste: ' + typeof teste);
        if(productCart.length > 0){ // JÁ TEM PRODUTO NO ARRAY/CARRINHO
            teste = productSearch(_idProduto);
            console.log('JÁ EXISTE PRODUTO NO CARRINHO. SAINDO DA APLICAÇÃO. ' + teste);
            if(teste[0]){
                console.log('ESSE PRODUTO JÁ EXISTE!!!' + teste[1]);
                const produtoRecorrente = document.getElementById(_idProduto);
                let inputProdutoRecorrente = produtoRecorrente.querySelector('li input');
                let valorAtual = inputProdutoRecorrente.value;
                inputProdutoRecorrente.value = parseInt(valorAtual) + 1;
            
                //let _valor = produtoRecorrente.querySelector('li input').value;
                //_valor++;
                //produtoRecorrente.querySelector('li input').value = _valor;
                //productCart[teste[1]].quantidade = _valor;
                productCart[teste[1]].quantidade = productCart[teste[1]].quantidade+1;
                console.log(JSON.stringify(productCart));
                arrStatus = [];
                return;
            }
                    
        }
            console.log('PRODUTO NOVO NO CARRINHO');
            const ulPai = _this.parentNode.parentNode;
            quantidade = 1;
            const primeiraLi = ulPai.querySelector('li:first-child');
            let produto = ulPai.querySelector('li:nth-child(2) p').textContent;
            let preco = ulPai.querySelector('li:nth-child(3) p').textContent;
            let condicoes = ulPai.querySelector('li:nth-child(4) p').textContent;
            //console.log('cliquei aqui: ' + _this.dataset.id);
            //console.log('cliquei aqui: ' + condicoes);



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

            //let _htmlContent = cart.innerHTML;
            let _htmlContent = '';

            /*cart.innerHTML = _htmlContent + `<ul data-idProduto="${_idProduto}" id='${_idProduto}'">
                <li><img src="images/img-0${_idProduto}-p.jpg" alt="produto"></li>
                <li><p class="desc_prod_cart">${produto}</p></li>
                <li><input type="text" maxlength="3" width="3" value="${quantidade}" /></li></li>
                <li><span>R$ </span><p class="desc_prod_cart">${preco}</p></li>
                <li></li>
            </ul>`;*/

       
            productCart.map(elemento => {
                _htmlContent = _htmlContent + `<ul data-idProduto="${elemento.idProduto}" id='${elemento.idProduto}'">
                <li><img src="images/img-0${elemento.idProduto}-p.jpg" alt="produto"></li>
                <li><p class="desc_prod_cart">${elemento.produto}</p></li>
                <li><input type="text" maxlength="3" width="3" value="${elemento.quantidade}" /></li></li>
                <li><span>R$ </span><p class="desc_prod_cart">${elemento.preco}</p></li>
                <li></li>
            </ul>`;
                cart.innerHTML = _htmlContent;
            });
            

    
    
  
}


function productSearch(produtoId){
    let arrStatus = [];
    productCart.map((item, index) => {
        console.log('ITEM.IDPRODUCT' + item.idProduto)
        if(item.idProduto === produtoId){
            console.log('produto já EXISTE')
            _index = index;
            teste = true;
            arrStatus[0] = teste;
            arrStatus[1] = _index;
        }
    });
    
    return arrStatus;
    
}


