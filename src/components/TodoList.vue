<template>
  <div class="todo-list">
    <v-sheet
      class="pa-4 text-center mx-auto"
      elevation="12"
      max-width="600"
      rounded="lg"
      width="100%"
      style="margin: 50px"
    >
      <slot></slot>
    </v-sheet>
    <div class="filter">
      <v-container class="text-center">
        <v-row justify="center">
          <v-col cols="12" md="2" sm="6">
            <v-btn
              rounded="xs"
              size="large"
              class="rounded-btn button-color text-color"
              block
              @click="setStatus(null)"
              >All</v-btn
            >
          </v-col>

          <v-col md="2" sm="6">
            <v-btn
              @click="setStatus(true)"
              rounded="xs"
              size="large"
              class="rounded-btn button-color text-color"
              block
              >completed</v-btn
            >
          </v-col>

          <v-col cols="12" md="2" sm="6">
            <v-btn
              rounded="xs"
              size="large"
              block
              class="rounded-btn button-color text-color"
              @click="setStatus(false)"
              >Incompleted</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  methods: {
    setStatus(val) {
      console.log("val1", val);
      this.$emit("setStatus", val);
    },
  },
};
</script>

<style scoped>
.rounded-btn {
  min-width: 100px; /* Minimum width */
  min-height: 40px;
  border-radius: 20px;
}

.button-color {
  background-color: #047857;
}
.text-color {
  color: white;
}
</style>
