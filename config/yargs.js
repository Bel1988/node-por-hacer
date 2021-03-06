const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'

    }
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'

        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Actualiza el estado completado de una tarea'

        }

        ,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tardea'
        }

    })
    .command('borrar', 'Elimina una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Elimina una tarea'

        }
    })
    .help()
    .argv;


module.exports = {
    argv
}