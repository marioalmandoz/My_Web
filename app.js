console.log("Hola, javaScript"); 

// variables
// var se supone que es globalr  
var myString = "Esto es un string"

console.log(myString)


//Codigo para una animacion guay con el raton En el titulo
window.requestAnimFrame = function(){
    return (
        window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame || 
        window.msRequestAnimationFrame ||
        function (callback) {
        window.setTimeout (callback);
        }
    );
};

  // Función para manejar el clic en el enlace
  function descargarPDF() {
    // Cambia la URL a la ubicación de tu archivo PDF
    var pdfURL = '/home/mario/pyhthon/Currículum Creativo Crema y Verde Empleo CV.pdf';

    // Crea un enlace temporal y simula un clic para iniciar la descarga
    var link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'Mario_Almandoz_cv.pdf'; // Puedes cambiar el nombre del archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Asocia la función al evento de clic en el enlace
document.getElementById('descargarPdf').addEventListener('click', descargarPDF);

/*
// Slider de la web(No funciona)
slider.oninput = changeFontSize;
function changeFontSize() {
    city.style.fontSize = this.value + "px";
}*/