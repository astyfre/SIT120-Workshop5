<template>
    <div>
        <h1>Checkout</h1>
        <p>Total Amount: \$ {{totalAmount}}</p>
        <button @click="placeOrder">Place Order</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cart: [],
        }
    },
    computed: {
        totalAmount(){
            return this.cart.reduce((sum,item) => sum + item.price, 0);
        }
    },
    methods: {
        placeOrder() {
            alert('Order placed successfully!');
            this.cart = []; //clear cart after placing order
        }
    }
}
</script>
