let contador = 0;

function mudarCor() {

    document.getElementById("div1").style.backgroundColor = "black";
    document.getElementById("div2").style.backgroundColor = "black";
    document.getElementById("div3").style.backgroundColor = "black";

    if (contador === 0) {
        document.getElementById("div1").style.backgroundColor = "red";
        alert("PARE");
    } else if (contador === 1) {
        document.getElementById("div2").style.backgroundColor = "yellow";
        alert("ATENÇÃO!");
    } else if (contador === 2) {
        document.getElementById("div3").style.backgroundColor = "green";
        alert("PODE IR!");
        contador = -1;
    }


    contador++;
}
