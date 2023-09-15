<template>
    <div class="product-item">
        <img :src="product.image" alt="Product Image"/>
        <h2>{{product.name}}</h2>
        <p>{{product.description}}</p>
        <p>\${{product.price}}</p>
        <button @click="addToCart">Add To Cart</button>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart', this.product.id);
        }
    }
}
</script>