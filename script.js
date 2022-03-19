function calcular() {
    if (document.getElementById("peso").value.length > 0, document.getElementById("altura").value.length > 0) {
        let nombre = document.getElementById("nombre").value;
        let peso = document.getElementById("peso").value;
        let altura = document.getElementById("altura").value;
        let metros = altura / 100;
        let cuadradoAltura = Math.pow(metros, 2)
        let resultado = peso / cuadradoAltura;
        let final = resultado.toFixed(2);
        let resultContent = document.getElementById("result");
        document.getElementById("masa").innerHTML = `IMC: ${final}`;
        if (resultado > 25) {
            document.getElementById("frase").innerHTML = `${nombre} estas gordito.`;
            resultContent.classList.add('bad');
            document.body.classList.add('fat')
        } else {
            document.getElementById("frase").innerHTML = `${nombre} estas bien de peso.`;
            resultContent.classList.add('fine');
            document.body.classList.add('slim')
        }
    }
    else {
        document.getElementById("frase").innerHTML = `<p class="alert">Faltan uno o más datos.</p>`;
    }
}

function resetear() {
    location.reload()
}

document.getElementById("mic").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        calcular()
    }
}); 
