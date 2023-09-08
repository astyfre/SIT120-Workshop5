<template>
  <div class="app">
    <h1>Vue with Moment.js plugin</h1>

    <p>Current Date: {{ formattedDate }}</p>

    <p>Display formatted date: {{ customFormattedDate }}</p>
    
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data(){
    return{
      //save current date in ISO format
      currentDate: moment().toISOString()
    };
  },
  computed:{
    //format date
    formattedDate(){
      return moment(this.currentDate).format('MMMM Do YYYY, h:mm:ss a')
    },
    customFormattedDate(){
      return moment(this.currentDate).format('dddd')
    }
  }
}
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
