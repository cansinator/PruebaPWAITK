var db = new PouchDB('ITK');

class Tiendas {
    table = "Tiendas";

    AgregaRegistro(autoservicioId, autoservicioNombre, autoservicioIcon, formatoId, formatoNombre, formatoIcon, zonaId, zonaNombre, tiendaId, tiendaNombre
        , longitud, latitud, rutaImagen) {
        var object = {
            _id: new Date().toISOString(),
            table: this.table,
            autoservicioId: autoservicioId,
            autoservicioNombre: autoservicioNombre,
            autoservicioIcon: autoservicioIcon,
            formatoId: formatoId,
            formatoNombre: formatoNombre,
            formatoIcon: formatoIcon,
            zonaId: zonaId,
            zonaNombre: zonaNombre,
            tiendaId: tiendaId,
            tiendaNombre: tiendaNombre,
            longitud: longitud,
            latitud: latitud,
            rutaImagen: rutaImagen
        };

        db.put(object)
            .then(console.log('Insertado correctamente!'))
            .catch(console.log);
    }

    ObtieneTodosRegistros() {
        let regs = [];
        db.allDocs({ include_docs: true, descending: false })
            .then(doc => {
                doc.rows.forEach(element => {
                    if (element.doc.table == this.table) {
                        regs.push(element.doc);
                    }
                });
            });
        return regs;
    }

    ObtieneRegistrosPorId(id) {
        let regs = [];
        db.allDocs({ include_docs: true, descending: false })
            .then(doc => {
                doc.rows.forEach(element => {
                    if (element.doc.table == this.table && element.doc.tiendaId == id) {
                        regs = element.doc;
                    }
                });
            });
        return regs;
    }
}