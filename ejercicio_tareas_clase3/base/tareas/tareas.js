const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },


    escribirJSON: function(unArray) {
        fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, 4))
        JSON.stringify(unArray, null, 4)
        
        ;
    
    },

    guardarTarea: function (tarea) {
        let tareas = this.leer()
        tareas.push(tarea)
        this.escribirJSON(tareas)
    },

    filtrarPorEstado: function (estado){
        let tareas = this.leer()

        return tareas.filter(function(tarea)){
            return tarea.estado === estado
        }

    }

}





module.exports = archivoTareas;