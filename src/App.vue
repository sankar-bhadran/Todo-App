<template>
  <div class="app">
    <todo-input></todo-input>
    <v-divider class="mb-4"></v-divider>
    <todo-list @setStatus="setStatus">
      <todo-item
        v-for="item in $store.state.items"
        :key="item.id"
        :item="item"
        :status="status"
      ></todo-item>
    </todo-list>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoItem from "./components/TodoItem.vue";
export default {
  name: "App",
  data() {
    return {
      status: null,
    };
  },
  components: {
    TodoInput,
    TodoList,
    TodoItem,
  },
  mounted() {
    this.$store.dispatch("fetchTodos");
  },
  methods: {
    setStatus(val) {
      console.log("val", val);
      this.status = val;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
