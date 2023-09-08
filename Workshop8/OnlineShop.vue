<template>
  <div id="app">
    <h1>Simple E-Commerce Website</h1>
<!--Filter Section-->
  <div>
    <label for="category">Choose a category</label>
    <select id="category" v-model="selectedCateory">
      <option v-for="category in categories" :key="category">{{category}}</option>
    </select>  
  </div>

    <!-- Products List-->
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
  </div>
    
  </div>
</template>

<script>
export default{
  data(){
    return{
      selectedCateory: '',
      categories: ['All', 'Electronics','Clothing','Books','Home Appliances',],
      products: [
        {
          id: 1,
          name: 'Laptop',
          price: 1000,
          category: 'Electronics',
        },
        {
          id: 2,
          name: 'Shirt',
          price: 20,
          category:'Clothing',
        },
        {
          id: 3,
          name: 'Mobile phones',
          price: 500,
          category: 'Electronics',
        },
        {
          id: 4,
          name: 'Book - "The Catcher in the Rye"',
          price: 15,
          category: 'Books',
        },
        {
          id: 5,
          name: 'Air Conditioner',
          price: 700,
          category: 'Home Appliances',
        },
        {
          id: 6,
          name: 'Book - "The Hunger Games',
          price: 17,
          category: 'Books',
        },
        {
          id: 7,
          name: 'RTX 4080ti',
          price: 670,
          category: 'Electronics',
        },
        {
          id: 8,
          name: 'Hoodie',
          price: 25,
          category: 'Clothing',
        },
        {
          id: 9 ,
          name: 'Jeans',
          price: 45,
          category: 'Clothing',
        },
        {
          id: 10,
          name: 'Refrigerator',
          price: 1100,
          category: 'Home Appliances',
        },
      ]
    };
  },
  computed: {
    filteredProducts(){
      if (this.selectedCateory === "All" || !this.selectedCateory ) {
        return this.products;
      }
      return this.products.filter(product => product.category === this.selectedCateory);
    }
  }
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
