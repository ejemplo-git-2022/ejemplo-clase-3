$(document).ready(function() {

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

    $("#formContacto").validate();

    $("#buttonEnviarFormularioConAjax").on('click', function() {
        var formValido = $('#formContacto').valid();

        if(formValido == true) {

            $.blockUI();

            var datosForm = $('#formContacto').serialize();
            var llamadaAjax = $.post("guardar_form_ajax.php", datosForm);
            
            llamadaAjax.done(function(respuesta){ 
                $.unblockUI();
                toastr.success(respuesta);
            });
    
            llamadaAjax.fail(function(jqXHR, textStatus, errorThrown) {
                $.unblockUI();
                toastr.error(respuesta);
            });
        }
    });

});