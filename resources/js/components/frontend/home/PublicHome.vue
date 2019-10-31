<template>
    <span>
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Album example</h1>
                <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                <p>
                    <a href="#" class="btn btn-primary my-2">Main call to action</a>
                    <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                </p>
            </div>
        </section>
        <div class="album bg-light">
            <div class="container">
                <h1 class="jumbotron-heading text-center alert-success">Products</h1>
                <div class="row">
                    <div class="col-md-3" v-for="product in getAllFrontProduct">
                        <div class="card mb-4 box-shadow">
                            <img class="card-img-top" :src="`${product.product_image}`" style="height: 200px; width: 100%; display: block;">
                            <div class="card-body">
                                <p class="card-text">{{ product.title }}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="submit" @click='addToCart(product.id)' class="btn btn-sm btn-outline-success">Add To Cart</button>
                                    </div>
                                    <small class="text-muted">BDT : {{ product.price }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </span>
</template>

<script>
    export default {
        name: "PublicHome.vue",
        mounted() {
            this.$store.dispatch("allFrontProduct");
        },
        computed:{
            getAllFrontProduct(){
                return this.$store.getters.getFrontProduct
            }
        },
        methods:{
            addToCart(product) {
                console.log(product);
            }
        }
    }
</script>

<style scoped>

</style>
