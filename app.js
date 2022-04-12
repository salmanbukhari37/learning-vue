const app = Vue.createApp({
    data() {
        return {
            name: "Salman Bukhari",
            age: 31,
            imageSource: './assets/images/ernan-solozabal.jpg',
        }
    },
    methods: {
        printName() {
            return this.name;
        },
        randomNumber() {
            return Math.random();
        },
        addedAge() {
            return this.age + 5;
        }
    }
});

app.mount("#assignment");