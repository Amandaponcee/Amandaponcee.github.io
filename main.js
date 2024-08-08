//console.log("Hola mundo desde la consola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString ('Desarrolladora front-end Jr.| Programadora')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Aprendiendo programando!')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();
