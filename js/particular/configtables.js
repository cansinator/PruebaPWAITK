$(document).ready(function(){
	$('#check_all_a').click(function(){
		var checkedStatus = this.checked;
		$('ul.opc').find('li.a :checkbox').each(function() {
			$(this).prop('checked', checkedStatus);
		});
		$('#example2').slideToggle();
	});
});
$(document).ready(function() {
    var table = $('.tabla1').DataTable( {  //////***** Tabla Dias Festivos
        responsive: {
            details: {
                type: 'column',
                target: -1
            }
        },
        columnDefs: [ {
            className: 'control',
            targets:   -1,
            targets: 'no-sort',
            orderable: false,
        } ],
        dom: 'Bfrtip',
            "lengthMenu": [[4, 25, 50], [4, 25, 50]],
        language: {
            searchPlaceholder: "Buscar...",
            buttons: {
                copyTitle: '<div id="alerta-header" class="hdr-azul"><h3>Portapapeles</h3><p class="cerrar"><i class="fal fa-times" aria-hidden="true" ></i></p></div>',
                copySuccess: {
                    _: '<div class="contenedor-alerta"><i class="fal fa-info-circle icono azul" id="alertaimagen"></i><h2 class="resaltafilas">%d filas copiadas</h2></div>',
                    1: '1 fila copiada'
                },
                pageLength: {
                    _: "Ver %d <i class='fal fa-chevron-down'></i>&nbsp;elementos",
                    '-1': "Todo &nbsp; <i class='fal fa-chevron-down'></i>"
                },
                    "lengthMenu": [[4, 25, 50, -1], [4, 25, 50, "All"]],
            },
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
        buttons: [
            'pageLength',
            {
            //     extend:    'copyHtml5',
            //     text:      '<div class="iconaction portapapeles"></div>',
            //     titleAttr: 'Copiar al portapapeles'
            // },
            // {
            //     extend:    'excelHtml5',
            //     text:      '<div class="iconaction excel"></div>',
            //     titleAttr: 'Exportar a Excel'
            // },
            // {
            //     extend:    'pdfHtml5',
            //     text:      '<div class="iconaction pdf"></div>',
            //     titleAttr: 'Exportar a PDF',
            //     orientation: 'landscape',
            },
        ]
    } );
} );
$(document).ready(function() {
    var table = $('.tabla2').DataTable( {  //////***** Tabla Dias Festivos
        responsive: {
            details: {
                type: 'column',
                target: -1
            }
        },
        columnDefs: [ {
            className: 'control',
            targets:   -1,
            targets: 'no-sort',
            orderable: false,
        } ],
        dom: 'Bfrtip',
            "lengthMenu": [[8, 25, 50], [8, 25, 50]],
        language: {
            searchPlaceholder: "Buscar...",
            buttons: {
                copyTitle: '<div id="alerta-header" class="hdr-azul"><h3>Portapapeles</h3><p class="cerrar"><i class="fal fa-times" aria-hidden="true" ></i></p></div>',
                copySuccess: {
                    _: '<div class="contenedor-alerta"><i class="fal fa-info-circle icono azul" id="alertaimagen"></i><h2 class="resaltafilas">%d filas copiadas</h2></div>',
                    1: '1 fila copiada'
                },
                pageLength: {
                    _: "Ver %d <i class='fal fa-chevron-down'></i>&nbsp;elementos",
                    '-1': "Todo &nbsp; <i class='fal fa-chevron-down'></i>"
                },
                    "lengthMenu": [[8, 25, 50, -1], [8, 25, 50, "All"]],
            },
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
        buttons: [
            'pageLength',
            {
            },
        ]
    } );
} );
$(document).ready(function() {
    var table = $('.tabla3').DataTable( {  //////***** Tabla Dias Festivos
        responsive: {
            details: {
                type: 'column',
                target: -1
            }
        },
        columnDefs: [ {
            className: 'control',
            targets:   -1,
            targets: 'no-sort',
            orderable: false,
        } ],
        dom: 'Bfrtip',
            "lengthMenu": [[8, 25, 50], [8, 25, 50]],
        language: {
            searchPlaceholder: "Buscar...",
            buttons: {
                copyTitle: '<div id="alerta-header" class="hdr-azul"><h3>Portapapeles</h3><p class="cerrar"><i class="fal fa-times" aria-hidden="true" ></i></p></div>',
                copySuccess: {
                    _: '<div class="contenedor-alerta"><i class="fal fa-info-circle icono azul" id="alertaimagen"></i><h2 class="resaltafilas">%d filas copiadas</h2></div>',
                    1: '1 fila copiada'
                },
                pageLength: {
                    _: "Ver %d <i class='fal fa-chevron-down'></i>&nbsp;elementos",
                    '-1': "Todo &nbsp; <i class='fal fa-chevron-down'></i>"
                },
                    "lengthMenu": [[8, 25, 50, -1], [8, 25, 50, "All"]],
            },
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
        buttons: [
            'pageLength',
            {
            },
        ],
		"footerCallback": function ( row, data, start, end, display ) {
            var api = this.api(), data;
 
            // Remove the formatting to get integer data for summation
            var intVal = function ( i ) {
                return typeof i === 'string' ?
                    i.replace(/[\$,]/g, '')*1 :
                    typeof i === 'number' ?
                        i : 0;
            };
 
            // Total over all pages
            total = api
                .column( 5 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
 
            // Total sin iva
            pageTotalSiva = api
                .column( 6, { page: 'current'} )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
 
            // Total IVA
            pageTotalIVA = api
                .column( 7, { page: 'current'} )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
 
            // Total over this page
            pageTotal = api
                .column( 8, { page: 'current'} )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
 
            // Update footer
			$( api.column( 5 ).footer() ).html('Total');
            $( api.column( 6 ).footer() ).html('$' + pageTotalSiva);
            $( api.column( 7 ).footer() ).html('$' + pageTotalIVA);
            $( api.column( 8 ).footer() ).html('$' + pageTotal);
        }
    } );
} );
$(document).ready(function() {
    var table = $('.tabla4').DataTable( {  //////***** Tabla Dias Festivos
        responsive: {
            details: {
                type: 'column',
                target: -1
            }
        },
        columnDefs: [ {
            className: 'control',
            targets:   -1,
            targets: 'no-sort',
            orderable: false,
        } ],
        dom: 'Bfrtip',
            "lengthMenu": [[8, 25, 50], [8, 25, 50]],
        language: {
            searchPlaceholder: "Buscar...",
            buttons: {
                copyTitle: '<div id="alerta-header" class="hdr-azul"><h3>Portapapeles</h3><p class="cerrar"><i class="fal fa-times" aria-hidden="true" ></i></p></div>',
                copySuccess: {
                    _: '<div class="contenedor-alerta"><i class="fal fa-info-circle icono azul" id="alertaimagen"></i><h2 class="resaltafilas">%d filas copiadas</h2></div>',
                    1: '1 fila copiada'
                },
                pageLength: {
                    _: "Ver %d <i class='fal fa-chevron-down'></i>&nbsp;elementos",
                    '-1': "Todo &nbsp; <i class='fal fa-chevron-down'></i>"
                },
                    "lengthMenu": [[8, 25, 50, -1], [8, 25, 50, "All"]],
            },
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
        buttons: [
            'pageLength',
            {
            },
        ]
    } );
} );


