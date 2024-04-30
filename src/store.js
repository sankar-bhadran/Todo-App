import { createStore } from "vuex";
import db from "./Firebase/init";
import {
  addDoc,
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

// vue.use(vuex);

export default createStore({
  state: {
    items: [],
  },

  getters: {},

  actions: {
    // ADD TODO ITEMS
    async addTodo({ commit }, todo) {
      try {
        const todoItem = {
          todo,
          completed: false,
        };
        const docRef = await addDoc(collection(db, "todos"), todoItem);
        commit("newTodo", { ...todoItem, id: docRef.id });
        console.log("Todo added successfully with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding todo: ", error);
      }
    },
    // GET TODO ITEMS
    async fetchTodos({ commit }) {
      const q = query(collection(db, "todos"));
      onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            commit("addItem", {
              id: change.doc.id,
              completed: change.doc.data().completed,
              todo: change.doc.data().todo,
            });
          }
        });
      });
    },
    // UPDATE TODO ITEMS
    async updateTodo({ commit }, todo) {
      const update = doc(db, "todos", todo.id);
      try {
        await updateDoc(update, todo);
        commit("updatedTodo", { ...todo });
      } catch (error) {
        console.error("Error in updating the document:", error);
      }
    },
    // DELETE TODO ITEMS
    async deleteTodo({ commit }, Id) {
      try {
        await deleteDoc(doc(db, "todos", Id));
        commit("removeItem", Id);
        console.log("Data successfully deleted");
      } catch (error) {
        console.error("Error deleting document:", error);
      }
    },

    // FOR THE STATUS
    checked({ commit }, Id) {
      console.log(Id);
      commit("toggleCompleted", Id);
    },
  },

  mutations: {
    newTodo(state, todoItem) {
      if (!state.items.some((item) => item.id === todoItem.id)) {
        state.items.push(todoItem);
      }
    },
    addItem(state, newItem) {
      state.items.push(newItem);
    },

    removeItem(state, Id) {
      state.items = state.items.filter((item) => item.id !== Id);
    },

    toggleCompleted(state, Id) {
      for (const item of state.items) {
        console.log(item);
        if (item.id === Id) {
          item.completed = !item.completed;
          return;
        }
      }
      console.error("Item not found");
    },
  },
});
