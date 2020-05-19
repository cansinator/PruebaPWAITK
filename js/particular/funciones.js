$(document).ready(function() {
$("#generar_objetivos").on("click",function(){
	$(".disnone").addClass("block");
	$(".none").addClass("flex");
	$(this).addClass("aquaActive").removeClass("aqua2");
});
	

	
});

/*function format(value) {
      return  '<div class="fat-demo-tab"> <div class="space"></div><div class="demo-tab left"> Concesionado <br> ' + value + '</div><div class="demo-tab">' + value + '</div></div>';
	  
	  
	  $(document).ready(function () {
      var table = $('#example').DataTable({});

      // Add event listener for opening and closing details
      $('#example').on('click', 'td.details-control', function () {
          var tr = $(this).closest('tr');
          var row = table.row(tr);

          if (row.child.isShown()) {
              // This row is already open - close it
              row.child.hide();
              tr.removeClass('shown');
          } else {
              // Open this row
              row.child(format(tr.data('child-value'))).show();
              tr.addClass('shown');
          }
      });
  });
  }*/

function format ( dataSource ) {

    var html = '<div class="fat-demo-tab"><div class="space"></div>'
    for (var key in dataSource){
        html +=  '<div class="demo-tab left">' + dataSource[key] +'</div>';
    }   

    return html += '</div>' + html + '</div>';
	
	
}

$(function () {

      var table = $('#example').DataTable({});

      // Add event listener for opening and closing details
      $('#example').on('click', 'td.details-control', function () {
          var tr = $(this).closest('tr');
          var row = table.row(tr);

          if (row.child.isShown()) {
              // This row is already open - close it
              row.child.hide();
              tr.removeClass('shown');
          } else {
              // Open this row
              row.child(format({
                  'Key 1' : tr.data('key-1'),
                  'Key 2' : tr.data('key-2')
              })).show();
              tr.addClass('shown');
          }
      });
  });

  