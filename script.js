var altura = window.document.getElementById('Altura');
var peso = window.document.getElementById('Peso');
var resultado = window.document.getElementById('resultado_geral');
 var video_gorda = window.document.getElementById('video_d_gorda');
var apertar = window.document.getElementById('butao_calcular');

resultado.innerHTML = '';

apertar.addEventListener('click',clickar);
apertar.addEventListener('mouseout',);
apertar.addEventListener('mousedown',);

function clickar() {
    apertar.style.background = '#0000a3';
    setTimeout(() =>{
         apertar.style.background = '#026d02';
    },10)
}

function imc(){
    var calcul = peso.value / (altura.value * altura.value);
    
    if (calcul < 18.5) {
        resultado.innerHTML = Number.parseFloat(calcul).toFixed(2).replace('.',',') + ' <br>Magreza ' + 'Obesidade 0';
    }

    if (calcul >= 18.5 && calcul <= 24.9) {
        resultado.innerHTML = Number.parseFloat(calcul).toFixed(2).replace('.',',') + ' <br>Normal ' + 'Obesidade 0';
    }

    if (calcul >= 25.0 && calcul <= 29.9) {
        resultado.innerHTML = Number.parseFloat(calcul).toFixed(2).replace('.',',') + ' <br>SobrePeso ' + 'Obesidade I';
    }
    
    if (calcul >= 30.0 && calcul <= 39.9) {
        resultado.innerHTML = Number.parseFloat(calcul).toFixed(2).replace('.',',') + ' <br>Obesidade ' + 'Obesidade II';
    }
    if (calcul >= 40.0) {
        resultado.innerHTML = Number.parseFloat(calcul).toFixed(2).replace('.',',') + ' <br>ObesidadeGrave ' + 'Obesidade III';
    }
}