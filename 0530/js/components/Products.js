import Product from './Product.js'

export default {
    components:{Product},
    template:`
        <div>
            <h1>Products</h1>
            <product></product>
            <div v-for="p in products" :key="p.id">
                <h1>{{p.id}}</h1>
                <router-link to="product/12">{{p.title}}</router-link>
                <form @submit.prevent="destroy(p.id)">
                    <input type="submit" value="刪除">
                </form>
            </div>
        </div>
    `,
    data(){
        return {
            products:[]
        }
    },
    // props:{
    //     products:Array
    // },
    methods:{
        destroy(id){
            let url = `https://api.escuelajs.co/api/v1/products/${id}`;
            fetch(url,{
                method:'DELETE',
            }).then(res=>res.json()).then(data=>{
                console.log(data)
                this.products = this.products.filter(p=>p.id != id);
            })
        }
    },
    mounted(){
        let url = 'https://api.escuelajs.co/api/v1/products';
        fetch(url).then(res=>res.json()).then(data=>{
            this.products = data;
        })
    }

}