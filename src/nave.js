const nave = document.querySelector("#carro");
 abri = document.querySelector(".bxs-cart");
 fechar = document.querySelector(".bx-flip-horizontal")

 abri.addEventListener('click',() => {
    nave.classList.add('abri');
 });

 fechar.addEventListener('click', () => {
    nave.classList.remove('abri')
 });
