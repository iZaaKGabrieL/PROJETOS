const valor = document.querySelector("#valor");
const valorDois = document.querySelector("#valor2")
const mais = document.querySelector("#mais");
const menos = document.querySelector("#menos");


//contagem

mais.addEventListener("click", function(){
    let valoratual = Number(valor.textContent);
    valoratual++;
    valor.textContent = valoratual;

});

menos.addEventListener("click", function(){
    let valoratual = Number(valor.textContent);
    valoratual--;
    valor.textContent = valoratual;
})


