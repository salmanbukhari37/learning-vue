const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput(e, secondName) {
        this.confirmedName = e.target.value  + ' ' + secondName; 
    },
    submitForm() {
        console.log("form submitted");
    },
    add(num) {
        this.counter = this.counter + num;
    },
    remove(num) {
        this.counter = this.counter - num;
    },
    setName(e, secondName) {
        this.name=e.target.value + ' ' + secondName;
    }
  }
});

app.mount('#events');
