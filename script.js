const data = {
    title: 'Data and Methods',
    person:{
        name: 'Vinicius Rosa',
        age: '20'
    }
}

const vm = new Vue({
    el: '#app',
    data, // = data: data
    methods: {
        alterTitle(){ //Não deve ser uma arrow function, pois é necessário o uso do this
            this.title = `Dev by: ${this.person.name}`;
            //Esse 'this' se refere à própria instância
        },
        ageSentence(age){
            return `${age} years old`;
        }
    }
});