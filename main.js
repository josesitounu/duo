let nombre = prompt("contraseña papi");

if(nombre != "popo"){
    do{
    nombre = prompt("si no te la sabes abrete papi")
    }while(nombre != "popo")
}




$(document).ready(function() {

    $(".p1").hover(function() {

        arriba = Math.random() * (500 - 1) + 1;

        abajo = Math.random() * (199 - 1) + 1;

        $(this).css("bottom", arriba);

        $(this).css("left", abajo);

    });

});

