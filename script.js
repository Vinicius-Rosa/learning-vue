const data = {
    question: '',
    answer: 'Eu não posso responder nada se você não me perguntar',
};

const vm = new Vue({
    el: '#app',
    data, // = data: data

    methods: {
        getAnswer(){
            if (!this.question.includes('?')){
                this.answer = 'Puets! Perguntas geralmente tem interrogação xD'
                return
            }

            axios.get('https://yesno.wtf/api')
                .then(res => {
                    this.answer = res.data.answer;
                })
                .catch(err => {
                    this.answer = 'Ops! Ocorreu algum erro :( ' + err
                })
        }
    },

    created(){
        this.debouncedGetAnswer = _.debounce(this.getAnswer,500);
    },

    watch: {
        question(){
            this.answer = 'Digitando...';
            this.debouncedGetAnswer();
        }
    }
});