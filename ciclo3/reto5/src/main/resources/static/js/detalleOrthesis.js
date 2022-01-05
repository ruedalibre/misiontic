$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('id')) {
        let id = searchParams.get('id');
        consultarById(id);
    }
});

function consultarById(id) {
    $.ajax({
        url: "http://158.101.14.132:8080/api/Ortopedic/get/" + id,
        //url: "http://localhost:8080/api/Ortopedic/get/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            llenarDatos(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatos(item) {
    $("#id").val(item.id);
    $("#brand").val(item.brand);
    $("#model").val(item.year);
    $("#category_id").val(item.category.name);
    $("#name").val(item.name);
    $("#description").val(item.description);
}