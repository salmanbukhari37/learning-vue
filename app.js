const app = Vue.createApp({
    data() {
        return {
            output1: "",
            output2: "",
        }
    },
    methods: {
        setOutput1(e) {
            this.output1 = e.target.value;
        },
        setOutput2(e) {
            this.output2 = e.target.value;
        },
        showAlert() {
            alert("Hey you clicked me!");
        }
    }
});

app.mount("#assignment");
