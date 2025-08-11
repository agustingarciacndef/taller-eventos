document.querySelector("button").addEventListener("click", function(event) {
    alert("Hola!");
    event.stopPropagation(); 
});

document.querySelector("#contenedor").addEventListener("click", function() {
    alert("Hola! Soy el div");
}
);