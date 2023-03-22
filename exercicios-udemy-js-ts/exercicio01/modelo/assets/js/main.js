// captura o evento de submit do formulario
 form = () =>{
    const form = document.querySelector('#formulario');
    form.addEventListener('submit', function(e) {
     e.preventDefault();
     console.log("evento prevenido");
    });
};

form();