const { createApp } = Vue;

createApp({
    data() {
        return {
            h1Text: "Ciao ecco un'immagine di una papera",
            h1Color: "red",
            imgPapera: "img/papera.jpg"
        }
    },
    methods: {
        changeColor() {

            if (this.h1Color === "red") {
                this.h1Color = "green";
            } else {
                this.h1Color = "red";
            }
        }
    }
}).mount('#app')