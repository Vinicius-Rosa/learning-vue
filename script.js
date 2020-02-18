const data = {
    question: '',
    answer: 'Eu não posso responder nada se você não me perguntar',
};

const vm = new Vue({
    el: '#app',
    data, // = data: data

    methods: {
        getAnswer(){
            if (!this.question.includes('?') && (!this.question == '')){
                this.answer = 'Puets! Perguntas geralmente tem interrogação xD'
                return
            } else if(this.question == ''){
                this.answer = 'Hey, faça uma pergunta!'
            } else {
                axios.get('https://yesno.wtf/api')
                    .then(res => {
                        if(res.data.answer == 'yes'){
                            this.answer = 'Sim';
                        } else if(res.data.answer == 'no'){
                            this.answer = 'Não';
                        }
                    })
                    .catch(err => {
                        this.answer = 'Ops! Ocorreu algum erro :( ' + err
                    })
            }

        }
    },

    created(){
        this.debouncedGetAnswer = _.debounce(this.getAnswer,600);
    },

    watch: {
        question(){
            this.answer = 'Digitando...';
            this.debouncedGetAnswer();
        }
    }
});