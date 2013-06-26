$(function() {
    var check_1 = (Math.floor(Math.random() * 9) + 1).toString(),
        check_2 = (Math.floor(Math.random() * 9) + 1).toString(),
        check = check_1 + check_2;

    $('#contactform span.form_check_1').text(check_1);
    $('#contactform span.form_check_2').text(check_2);
    $('#contactform input[name="contact_check_data"]').val(check);

    var sending = false;
    $('#contactform').on('submit', function(e) {
        var $form = $(this), $submit = $('input[type="submit"]', $form);

        e.preventDefault();

        $('input, textarea', $form).prop('readonly', true);
        $submit.val('Wysyłam…');

        $form.slideUp('fast', function() {
            $form.after('<div class="form-success">Wiadomość została wysłana! Skontaktujemy się z Tobą jak tylko to będzie możliwe.</div>');
        });
    });
});