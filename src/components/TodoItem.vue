<template>
  <div class="todo-item" v-show="status == null || status === item.completed">
    <v-list lines="two">
      <v-list-item>
        <div v-if="edit">
          <v-text-field
            label="for Update Click Enter"
            variant="solo-filled"
            v-model="todo.todo"
            @keydown.enter="updatetodo"
          ></v-text-field>
        </div>
        <div v-if="!item.todo">
          <div class="text-h5 font-weight-medium mb-2">You Have No Task</div>
        </div>
        <div v-else :class="{ throw: item.completed }">
          <p class="font-weight-bold">{{ item.todo }}</p>
        </div>
        <template v-slot:prepend>
          <div style="display: flex; gap: 25px">
            <v-btn
              @click="edit = !edit"
              icon="mdi-information"
              variant="text"
              color="primary"
              >Edit</v-btn
            >
            <v-btn
              icon="mdi-information"
              variant="text"
              @click="deleteTodo"
              color="red"
              >Delete</v-btn
            >
          </div>
        </template>

        <template v-slot:append>
          <input type="checkbox" :checked="item.completed" @click="check" />
        </template>
      </v-list-item>
      <!-- <v-divider class="mb-10"></v-divider> -->
    </v-list>
  </div>
</template>

<script>
export default {
  props: ["item", "status"],
  name: "TodoItem",
  data() {
    return {
      todo: this.item,
      edit: false,
    };
  },
  methods: {
    // FOR UPADTETODO AN ACTION IS DISPATCHED
    updatetodo() {
      if (this.todo.todo.trim() !== "") {
        this.$store.dispatch("updateTodo", this.todo);
        this.edit = false;
      }
    },

    // FOR DELETETODO AN ACTION IS DISPATCHED
    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.item.id);
    },
    // FOR STATUSKNOWNING AN ACTION IS DISPATCHED
    check() {
      console.log(this.item.id);
      this.$store.dispatch("checked", this.item.id);
    },
  },
};
</script>

<style scoped>
.throw {
  text-decoration: line-through;
}
</style>
