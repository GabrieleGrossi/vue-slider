const {createApp} = Vue;

createApp({
    data(){
        return{
            //lista immagini locandine film
            images:[
                'https://www.ilpost.it/wp-content/uploads/2019/12/locandine14.jpg?x84878',
                'https://i.ebayimg.com/images/g/IWwAAOSweCpcUNrC/s-l1600.jpg',
                'https://m.media-amazon.com/images/I/81ynV-Akv-L.jpg',
                'https://pillsofmovies.com/wp-content/uploads/2016/11/il-grande-gatsby-nuovo-trailer-italiano-due-spot-tv-e-10-locandine-2.jpg',
                'https://www.postermania.it/38116-thickbox_default/locandina-l-odio-la-haine-vincent-cassel-mathieu-kassovitz-banlieue-cinema-cat3.jpg',
                'https://aforismi.meglio.it/img/film/Dune-2021.jpg',
                'https://www.drcommodore.it/wp-content/uploads/2018/10/exorcist-min.jpg'
            ],
            activeIndex : 0,
        }
    },
    methods: {
        anteSlide(){
            if (this.activeIndex === 0){
                this.activeIndex = this.images.length -1;
            } else {
                this.activeIndex--;
            }
        },
        postSlide(){
            if(this.activeIndex === this.images.length -1){
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        }
    }
}).mount('#app');