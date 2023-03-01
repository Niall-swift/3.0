


function abrirWhatsapp(){
   let nome = document.querySelector('#nomes').value;
   let telefone = document.querySelector('#numero').value;
   let endereco = document.querySelector('#endereco').value;
   let numerodacasa = document.querySelector('#numerodacasa').value;
   let bandeira = document.querySelector('#seleçaodebandeira').value;
   let items = document.getElementsByClassName('items')[0].innerText;
   let valor = document.getElementsByClassName('cart-total-container')[0].innerText;
   let quantidade = document.getElementsByClassName('product-qtd-input');
    for (var i = 0; i < quantidade.length; i++){
     var valores = quantidade[i].value;
     console.log(valores)
    }

   
   

    var url = "https://wa.me/5521980501851?text=" // Seu numero
      + "*ESPETINHO CARIOCA %20 ;)*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*Nome*:: " + nome + "%0a" // Dados do formulário
      + "*Telefone* %20%20 " + telefone + "%0a"
      + "*Endereço*:: " + endereco + "%0a"
      + "*número da casa*::" + numerodacasa + "%0a" 
      + "*cartão*::"+ bandeira + "%0a%0a"
      + "*items* %0a" +valores+"X-->"+"%20"+ items + "%0a%0a"
      + "-Valor%20" + valor;
    window.open(url, '_blank').focus();

    console.log()
  
};
const purchaseButton = document.getElementsByClassName("btn")[0]
    purchaseButton.addEventListener("click",abrirWhatsapp)

