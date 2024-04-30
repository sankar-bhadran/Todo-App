<template>
  <div class="todo-input">
    <v-container>
      <v-row>
        <v-col order="last">
          <v-btn
            size="large"
            variant="outlined"
            class="btn-text-visible white-text custom-button"
            block
            @click="addtodo"
            >ADD TODO</v-btn
          >
        </v-col>
        <v-col>
          <v-text-field
            label="Add Todos"
            variant="solo-filled"
            v-model="todo"
          ></v-text-field>
        </v-col>
        <v-col order="first">
          <p class="font-weight-regular text" style="font-size: 35px">
            {{ formattedDate }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      todo: "",
      formattedDate: this.date(),
    };
  },
  methods: {
    // ADDING TODO AN ACION IS DISPATCHED
    addtodo() {
      this.$store.dispatch("addTodo", this.todo);
      this.todo = "";
    },
    
    // DATE 
    date() {
      const date = new Date();
      const options = { weekday: "long", month: "long", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    },
  },
};
</script>

<style scoped>
.custom-text-field {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 10px;
  font-size: 16px;
  width: 100%;
  height: 50%;
}

.white-text {
  color: white;
}
.text {
  color: black;
}
.btn-text-visible {
  background-color: #047857;
}
</style>
