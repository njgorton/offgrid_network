//============================RESPONSIVE NAV MENU==============================
$('document').ready(function() {
    $('#nav-toggle').on('click', function(event) {
      event.stopPropagation();
      this.classList.toggle('active');
      $('.navigation__list').slideToggle();
    });
  
    $('html').click(function() {
      if($('#nav-toggle').hasClass('active')) {
        $('#nav-toggle').removeClass('active');
        $('.navigation__list').slideToggle();
      }
    });
});