<template>
  <base-page class="column items-center">
    <!-- Header -->
    <h3 class="text-bold q-mt-xl q-mb-md">To Do Page</h3>
    <base-button
      color="primary"
      label="Add Task"
      @click="$router.push('/todo/add')"
    />
    <!-- List of Undone Cards -->
    <base-card
      v-for="todo in undoneToDoList"
      :key="todo.id"
      style="width: 95%"
      class="row q-pa-md q-my-sm justify-between"
    >
      <q-checkbox class="col-1" v-model="todo.isDone"></q-checkbox>
      <div class="col-8">
        <h5 class="q-ma-xs text-bold">{{ todo.title }}</h5>
        <p class="q-mx-xs">{{ todo.description }}</p>
      </div>
      <div>
        <h6 class="q-ma-xs text-weight-thin">Deadline</h6>
        <p class="q-mx-xs">{{ todo.deadline }}</p>
      </div>
      <div class="row justify-center">
        <base-button
          flat
          color="primary"
          icon="edit"
          @click="$router.push('/todo/edit/' + todo.id)"
        />
        <base-button
          flat
          color="primary"
          icon="delete"
          @click="deleteDialog(todo.id)"
        />
      </div>
    </base-card>

    <!-- List of Done Cards -->
    <base-card
      v-for="todo in doneToDoList"
      :key="todo.id"
      style="width: 95%"
      class="row q-pa-md q-my-sm justify-between bg-blue-grey-2"
    >
      <q-checkbox class="col-1" v-model="todo.isDone"></q-checkbox>
      <div class="col-8">
        <h5 class="q-ma-xs text-bold">{{ todo.title }}</h5>
        <p class="q-mx-xs">{{ todo.description }}</p>
      </div>
      <div>
        <h6 class="q-ma-xs text-weight-thin">Deadline</h6>
        <p class="q-mx-xs">{{ todo.deadline }}</p>
      </div>
      <div class="row justify-center">
        <base-button
          flat
          color="primary"
          icon="edit"
          @click="$router.push('/todo/edit/' + todo.id)"
        />
        <base-button
          flat
          color="primary"
          icon="delete"
          @click="deleteDialog(todo.id)"
        />
      </div>
    </base-card>

    <!-- Delete Confirm Dialog -->
    <base-dialog v-model="confirm">
      <base-card>
        <q-card-section>
          <h5 class="text-bold q-ma-md">Delete Task?</h5>
        </q-card-section>
        <q-card-actions align="right">
          <base-button flat label="Cancel" color="primary" v-close-popup />
          <base-button
            flat
            label="Delete"
            color="primary"
            @click="deleteToDo()"
          />
        </q-card-actions>
      </base-card>
    </base-dialog>
  </base-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import BasePage from '../../components/BasePage.vue';
import BaseCard from '../../components/BaseCard.vue';
import BaseDialog from '../../components/BaseDialog.vue';
import BaseButton from '../../components/BaseButton.vue';
import todoList, { deleteTask } from '../../todoList';
const confirm = ref(false);
const toBeDeletedId = ref('');

const doneToDoList = computed(() => {
  return todoList.value.filter((item) => item.isDone === true);
});

const undoneToDoList = computed(() => {
  return todoList.value.filter((item) => item.isDone === false);
});

function deleteDialog(id: string) {
  confirm.value = true;
  toBeDeletedId.value = id;
}

function deleteToDo() {
  deleteTask({ id: toBeDeletedId.value });
  confirm.value = false;
}
</script>
