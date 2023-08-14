<template>
  <div class="todo-app">
    <h1>Todo App</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Enter a new task">
    <ul>
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        <input type="checkbox" v-model="task.completed">
        <span :class="{ completed: task.completed }">{{task.text}}</span>
        <button @click="removeTask(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask(){
      if (this.newTask.trim() !== ''){
        this.tasks.push({
          text: this.newTask,
          completed: false
        });
        this.newTask='';
      }
    },
    removeTask(index){
      this.tasks.splice(index, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-app{
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  align-items: center;
  margin: 10px 10px;
  text-align: left; /* Align task list items to the left */
  margin-left: auto; /* Move task list to the left of the center */
  margin-right: auto;
  display: block;
}
.completed{
  text-decoration: line-through;
  color: #888;
}

button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: red;
  border: none;
  color: white;
  cursor: pointer;
}

</style>
