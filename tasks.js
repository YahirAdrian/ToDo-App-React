const data = {
    userData : {
        name: 'Yahir',
        preferences: {}
    },

    lists: [
        {
            id: 1,
            name: 'Programación',
            iconId: 1
        },
        {
            id: 2,
            name: 'Programación en JS',
            iconId: 2
        },
        {
            id: 3,
            name: 'Programación en React',
            iconId: 3
        }

    ],

    tasks: [
        {
            id: 123,
            listId: 1,
            name: 'Aprender nuevas tecnologías',
            due: '16/06/2023',
            completed: false,
            today: false
        },
        {
            id: 124,
            listId: 3,
            name: 'Terminar curso de React',
            due: '17/06/2023',
            completed: false,
            today: false
        },
        {
            id: 125,
            listId: 1,
            name: 'Aprender Figma',
            due: '16/06/2023',
            completed: false,
            today: false
        },
        {
            id: 126,
            listId: 2,
            name: 'Aprender conceptos técnicos de JS',
            due: '16/06/2023',
            completed: false,
            today: false
        },
        {
            id: 127,
            listId: 2,
            name: 'Prácticar en proyectos',
            due: '16/06/2023',
            completed: false,
            today: true
        },
        {
            id: 128,
            listId: 3,
            name: 'Ser un buen programador en React',
            due: '17/06/2023',
            completed: true,
            today: false
        },

    ]
}

console.log(JSON.stringify(data));