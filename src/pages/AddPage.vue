<template>
  <base-page class="column items-center">
    <!-- Header -->
    <h3 class="text-bold q-my-xl">Add Page</h3>
    <base-button color="primary" label="Back" @click="$router.push('/')" />
    <base-card style="width: 80%" class="q-pa-md q-my-md">
      <q-form>
        <base-input v-model="taskTitle" label="Title"></base-input>
        <base-input
          v-model="taskDescription"
          class="q-mt-md"
          label="Description"
        ></base-input>
        <base-input
          v-model="taskDeadline"
          class="q-mt-md"
          type="date"
          label="Deadline"
        ></base-input>
        <base-button
          color="primary"
          class="q-mt-md"
          label="Submit"
          @click="addToDo()"
        />
      </q-form>
    </base-card>

    <!-- Alert Dialog -->
    <base-dialog v-model="alert">
      <base-card>
        <q-card-section>
          <h5 class="text-bold q-ma-md">
            Failed to Add New Task, Please Input Data!
          </h5>
        </q-card-section>
        <q-card-actions align="right">
          <base-button flat label="Ok" color="primary" v-close-popup />
        </q-card-actions>
      </base-card>
    </base-dialog>
  </base-page>
</template>

<script setup lang="ts">
import BasePage from 'src/components/BasePage.vue';
import BaseCard from 'src/components/BaseCard.vue';
import BaseButton from 'src/components/BaseButton.vue';
import BaseInput from 'src/components/BaseInput.vue';
import BaseDialog from 'src/components/BaseDialog.vue';
import { addTask } from 'src/todoList';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const taskTitle = ref('');
const taskDescription = ref('');
const taskDeadline = ref('');
const router = useRouter();
const alert = ref(false);

function addToDo() {
  if (
    addTask({
      title: taskTitle.value,
      description: taskDescription.value,
      deadline: taskDeadline.value,
    }) == true
  ) {
    router.push('/');
  } else {
    alert.value = true;
  }
}
</script>
