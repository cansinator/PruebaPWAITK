//Functionality JS: Carrera, José Aurelio  jose.carrera@elektra.com.mx
//Design: Veloz, Hugo César   hveloz@italika.com.mx
$(".alerta").hide();
$(".backpop").hide();
$(".activepop").on("click",function(){
  $(".alerta").fadeOut(300);
  $("#mb-"+ $(this).attr("id")).show();
  $(".backpop").show();
});
$(".cerrar").on("click",function(){
  $(".alerta").fadeOut(300);
  $(".backpop").fadeOut(300);
});
$( ".alerta" ).draggable({
  revert: 'invalid',
  cursor: 'move',
  axis: "y",
  scroll: false,
  start: function(event, ui) {
    initialPos = ui.position.top;
    $(this).addClass("Yaxis");
  	$(".alerta").data({'originalLeft': $(".alerta").css('left'),
    'origionalTop': $(".alerta").css('top'),
    });
  },
  drag: function(event, ui) {
      $(".alerta" ).draggable({axis: "y" });
      $(".alerta").css({"position": "fixed"});
    var pos = ui.position;
        if (pos.top > initialPos + 100 && $(this).is(".Yaxis")) {
            $(this).removeClass("Yaxis");
            $(this).draggable('option', 'axis', false);
            $(".alerta").fadeOut(300);
            $(".backpop").fadeOut(300);
            setTimeout(function(){
              $(".alerta").css({'left': $(".alerta").data('originalLeft'),
               'top': $(".alerta").data('origionalTop')
            });
            }, 301);  
        }
  },
  stop: function() {
    $(this).draggable('option', 'axis', "y");
    }
});
$("#botonload").on("click",function(){
  $("#loading").css({"display": "block"});
  $(".backpop").show();
});
$("#loading").on("click",function(){
  $("#loading").css({"display": "none"});
  $(".backpop").hide();
});