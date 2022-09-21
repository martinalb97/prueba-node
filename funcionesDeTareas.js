const fs = require ('fs')

let archivoTareas = {
  archivo: './tareas.json',
  leerArchivo: function () { // no se puede haciendo () => o sea, arrow function
    return JSON.parse(fs.readFileSync(this.archivo, 'utf8'))
  },
  escribirJson: function (tareas) {
    fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, " "))
  },
  guardarTarea(tarea) {
    let tareas = this.leerArchivo()
    tareas.push(tarea)
    this.escribirJson(tareas)
  },
  filtrarPorEstado:function (estado) {
    let tareas = this.leerArchivo()
    return tareas.filter(tarea => tarea.estado === estado)
  }
}

module.exports = archivoTareas