let archivoTareas = require ('./funcionesDeTareas')
let tareas = archivoTareas.leerArchivo()

let listar = () => {
  //for (let i = 0; i < tareas.length; i++)
  //  console.log('Tarea: ' + tareas[i].titulo + '. ' + 'Estado: ' + tareas[i].estado + '.')
  tareas.forEach((tarea, index) => {
    console.log(index + 1 + ' - ' + 'Tarea: ' + tareas[index].titulo + '. ' + 'Estado: ' + tareas[index].estado + '.')
  });
}

switch (process.argv[2]) {
  case 'listar':
    listar()
    break;
  case undefined:
    console.log('Atención - Tienes que pasar una acción.')
    break;
  case 'crear':
    let titulo = process.argv[3]
    let tarea = {
      titulo,
      estado: 'pendiente'
    }
    archivoTareas.guardarTarea(tarea)
    console.log('Tarea: ' + titulo + ' creada. Con estado: pendiente.')
    break;
  case 'filtrar':
    archivoTareas.filtrarPorEstado(process.argv[3]).forEach(tarea => {
      console.log('Tarea: ' + tarea.titulo + '. Estado: ' + tarea.estado + '.')
    })
    break
  default:
    console.log('No entiendo que queres hacer.')
}