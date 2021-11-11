// 1. Creo un variabile dove andrò a collegarmi la sezione dell'html con vue
// 2. Dentro creo un array di oggetti dove andrò a inserire i dati delle singole slide
// 3. Nell'html mi vado a posizionare i dati presenti nel mio array
// 4. Per selezionare quale oggetto mi deve andare a prelevare creo una propietà marcatrice che mi terrà il conto della posizione
// 5. Per riuscire far apparire solo determinati elementi aggiungo la clsse active a tali elemneti
// 5.1  ...per far ciò aggiungo una key e tramite una condizione creata con Vue gli fato a dire che se l'oggetto marcatore ha il valore uguale alla kay di aggiungere la classe active altrimenti ""
// 6. Tramite il tag @click sull'html vado af indicare le funzioni da dare ai pulsanti inserite dentro methods
var carusel = new Vue({
    el:"#app",
    data:{
        // propietà marcatrice
        activeSlide: 0,
        slides: [
            {
                image: "img/01.jpg",
                title: "Svezia",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
            {
                image: "img/02.jpg",
                title: "Svizzera",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
            {
                image: "img/03.jpg",
                title: "Gran Bretagna",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
            {
                image: "img/04.jpg",
                title: "Germania",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
            {
                image: "img/05.jpg",
                title: "Paradise",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
            },
        ]
    },
    // funzioni per click
    methods: {
        nextSlide: function(){
            if(this.activeSlide > this.slides.length -1){
                this.activeSlide = 0 
            } else {
            ++this.activeSlide
            }
           
        },

        prevSlide: function(){
            if(this.activeSlide === 0){
                this.activeSlide = this.slides.length -1
            } else {
            --this.activeSlide 
            }
           
        }
    }
})

