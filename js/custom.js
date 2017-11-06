
var menu = document.getElementsByClassName('menu')[0];
var burger = document.getElementById("burger");

burger.onclick= function(){
  this.classList.toggle('open');
  menu.classList.toggle('inv');
}


$( document ).ready(function() {
    var $container = $('.grid');
    // filter buttons
    $('#filters button').click(function(){
		var $this = $(this);
        // don't proceed if already selected
        if ( !$this.hasClass('is-checked') ) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({  itemSelector: '.grid-item', filter: selector });
      return false;
    });

});
