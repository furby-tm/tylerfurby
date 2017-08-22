Nav = {
    hoveredNav: function() {
      anime({
        targets: '.brand',
        translateX: 250
      });
    }
}

$("img").hover(
    function(){
      Nav.hoveredNav();
  },
  function(){
      Nav.hoveredNav = function () {
        anime({
          targets: '.brand',
          translateX: 0
        });
      Nav.hoveredNav();
      };
    });
