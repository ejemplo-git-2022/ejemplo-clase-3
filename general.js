$(function() {

    $('.componente-select2').select2();

    jQuery.validator.setDefaults({
        highlight: function(element) {
            jQuery(element).closest('.form-control').addClass('is-invalid');
        },
        unhighlight: function(element) {
            jQuery(element).closest('.form-control').removeClass('is-invalid');
        },
        errorElement: 'span',
        errorClass: 'label label-danger',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $("#cambio-de-otro-formContacto").validate();

    $("#buttonEnviarFormularioConAjax").on('click', function() {
        var formValido = $('#formContacto').valid();

        if(formValido == true) {

            $.blockUI();
            $('#test').hide();

            var datosForm = $('#formContacto').serialize();
            var llamadaAjax = $.post("guardar_form_ajax.php", datosForm);
            
            llamadaAjax.done(function(respuesta){ 
                $.unblockUI();
                toastr.success(respuesta);
            });
    
            llamadaAjax.fail(function(jqXHR, textStatus, errorThrown) {
                $.unblockUI();
            });
        }
    });

});

//Nuevo comentario de otro
var idEmpleadoOriginal = 10;
var idProducto = 434;
//Ejemplo de codigo
var saldo = 90000;
if(saldo > 100) {
    console.log('Si es mayor que 100');
}

//Este es un ejemplo
while (10 < 100) {
    console.log('Ejemplo...');
}