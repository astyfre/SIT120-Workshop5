<template>
    <div>
        <h1>Cart</h1>
        <ul>
            <li v-for="item in cart" :key="item.id">{{item.name}} - \${{item.price}}</li>
        </ul>
        <router-link to="/checkout">Proceed to Checkout</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cart: []
        }
    }
}
</script>
