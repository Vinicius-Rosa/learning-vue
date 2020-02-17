const data = {
    title: 'Loops',
    users: {
        Joao: 'admin',
        Thiago: 'editor',
        Pafuncio: 'guest',
    },
    todos: [
        {
            id: '1',
            title: 'Wash my possante!',
            complete: 'false',
        },
        {
            id: '2',
            title: 'Buy some milk',
            complete: 'true'
        }
    ]
}

const vm = new Vue({
    el: '#app',
    data, // = data: data
});