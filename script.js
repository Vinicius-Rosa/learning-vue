const vm = new Vue({
    el: '#app',
    data:{
        title: 'Instância 1',
        text: 'Texto da Instância 1'
    }
})

const helloWorldComponent = {
    template: `
        <div class="component">
            Hello, World!
        </div>
    `
}

const vm2 = new Vue({
    el: '#app2',
    data:{
        title: 'Instância 2',
        text: 'Texto da Instância 2'
    },
    components: {
        'hello-world': helloWorldComponent,
    }
});