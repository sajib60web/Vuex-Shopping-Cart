export default {
    state: {
        frontProduct:[]
    },
    getters:{
        getFrontProduct(state){
            return state.frontProduct
        },
    },
    actions: {
        allFrontProduct(context){
            axios.get('/front-products')
                .then((response)=>{
                    // console.log(response.data.products);
                    context.commit('frontProducts', response.data.products)
                })
        },
    },
    mutations: {
        frontProducts(state, payload){
            return state.frontProduct = payload
        },
    }
}
