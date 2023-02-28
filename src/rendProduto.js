import {carrinho}  from "./systemCompra.js";
import { conectaApi } from "./Api.js";

 const produto = document.querySelector("[data-card]");
  
 function criaProduto(nome, img, preco){
    const produtos = document.createElement("box");
    produtos.className = "card"
    produtos.innerHTML = `
    <div class="box">
    <div class="item">
        <img src="${img}" alt="" class="imagem-produto">
        
            <h1 class="nome-produto" id="nome" >${nome}</h1>
            
        <p class="valor-produto">R$${preco}</p>
    </div>
    <button  class="add" type="submit" name="submit">Compra</button>
</div>
    `
  
    // Botão add produto ao carrinho
    const addToCartButtons = document.getElementsByClassName("add")
    for (var i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener("click", carrinho.addProductToCart)
    }
  
    return produtos;

    
 }

 async function listaDeProduto() {
    const listaProduto = await conectaApi.listaDeProdutos();
    listaProduto.forEach(elemento => produto.appendChild(
        criaProduto (elemento.nome, elemento.img, elemento.preco)))
        
    };
   

 listaDeProduto();


