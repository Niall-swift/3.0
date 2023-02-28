async function listaDeProdutos (){

    const conecxao = await fetch("https://jsonespeto-jg96gn9vt-niall-swift.vercel.app/produtos");
    const conecxaoConvetida = await conecxao.json()

    
    
    return conecxaoConvetida;
}    

async function enviaProduto (nome, img, descricao, preco){
    const conecxao = await fetch("https://jsonespeto-jg96gn9vt-niall-swift.vercel.app/produtos", {

        method: "POST",
        headers: {
            "content-type": "application/json"
    
        },

        body: JSON.stringify({
            nome: `${nome}`,
            img: img,
            descricao: `${descricao}`,
            preco: `${preco}`

        })
    });

    const conecxaoConvetida = await conecxao.json();

    return conecxaoConvetida;
}




export const conectaApi = {
    listaDeProdutos
}

