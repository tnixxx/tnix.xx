function slowScroll(id) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 1000);
    return false;
}
$('.form-block').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      url:"telegram.php",
      type: 'POST',
      data: $(this).serialize(),
      success: function(data) {
        alert('Спасибо за заявку, скоро мы вам перезвоним.');
        // console.log(data);
        $('.form-block')[0].reset();
      },
    });
});