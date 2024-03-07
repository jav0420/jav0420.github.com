

//DOM

/*let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link)
})
*/

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    })
})


//obtener elenmentos de la clase close

let links = document.querySelectorAll(".close");
//recorrer
links.forEach(function(link){
    //agregar un evento click
    link.addEventListener('click',function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");
        //quitar las clase de animaciones que ya tiene
        content.classList.remove("animate__animated");
        content.classList.remove("animate__backInLeft");
        //añadir animacion de salida
        content.classList.add("animate__animated");
        content.classList.add("animate__backOutRight");
        //para demoorar 
        setTimeout(function(){
        //para redireccionar la web
        location.href="/";
        },600);

        return false;
    });
});
/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star-o");
    icono.classList.add("fa-star");

});
*/