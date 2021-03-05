Vue.createApp({

    data() {

        return {

            word: null,
            list: [],
            message: null

        }

    },

    methods: {

        showList(word) {
            this.list = []
            this.list.push(this.word)
            this.list.push(this.word.toLowerCase())
            this.list.push(this.word.toUpperCase())

            }
        }
    

}).mount("#app")