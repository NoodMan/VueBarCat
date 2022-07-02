<template>
  <div>
    <form class="result">
      <h1><label for="">Liste des tables libre</label></h1>
      <select
        name="free_tableSelect"
        id="free_tableSelect"
        @change="showTableFree"
        v-model="free_tables_id"
      >
        <!-- <option value="">👀</option> -->
        <option
          v-for="free_table in free_tables"
          :key="free_table.id"
          :value="free_table.id"
        >
          {{ free_tableSelect.id }}
          {{ free_tableSelect.table_nbr }}
          {{ free_tableSelect.nbr_place }}
          {{ free_tableSelect.status }}
        </option>
      </select>
    </form>
    <div class="result">
      <div>
        <strong>
          <label for="">n° id : <br /></label
        ></strong>
        <span class="">
          {{ free_tableSelect?.id }}
        </span>
      </div>
      <div>
        <button class="">Validation réservation</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapWritableState } from "pinia";
import { free_tableStore } from "../stores/free_table";
export default {
  data() {
    return {
      free_tables_id: undefined,
      free_tableSelect: {},
    };
  },
  methods: {
    async getTable_free() {
      const free_table = await axios
        .get("http://localhost:666/booking")
        .then((response) => {
          this.free_table = response.data;
          console.log("-->⛔️ Je suis ici 🎉 <--", response.data);
        })
        .catch((error) => {});
    },
    showTableFree() {
      this.freeTable_selected = this.free_tables.find(
        (b) => b.id == this.free_tables_id
      );
    },
  },

  mounted() {
    this.getTable_free();
  },

  computed: {
    ...mapWritableState(free_tableStore, ["free_table"]),
  },
};
</script>

<style scoped>
html {
  background-color: rgb(255, 255, 255);
}

select {
  text-align: center;
}

.result {
  text-align: center;
}
</style>