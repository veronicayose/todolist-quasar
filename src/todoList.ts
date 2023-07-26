import { ref } from 'vue';
interface Todo {
  id?: string;
  title?: string;
  description?: string;
  deadline?: string;
  isDone?: boolean;
}

const todoList = ref<Todo[]>([
  {
    id: '1',
    title: 'Dicoding',
    description: 'Simulasi Ujian Associate Cloud Engineer',
    deadline: '2023-10-06',
    isDone: true,
  },
  {
    id: '2',
    title: 'Dicoding',
    description: 'Pemrograman Web Dasar',
    deadline: '2023-03-02',
    isDone: false,
  },
  {
    id: '3',
    title: 'Dicoding',
    description: 'Pemrograman Web Dasar',
    deadline: '2023-03-30',
    isDone: true,
  },
  {
    id: '4',
    title: 'Dicoding',
    description: 'Pemrograman Web Dasar',
    deadline: '2023-04-20',
    isDone: true,
  },
]);

function addTask(data: Todo) {
  const id = (
    parseInt(todoList.value[todoList.value.length - 1].id || '1') + 1
  ).toString();
  const isDone = false;

  if (
    data.title !== undefined &&
    data.description !== undefined &&
    data.deadline !== undefined &&
    data.title !== '' &&
    data.description !== '' &&
    data.deadline !== ''
  ) {
    const title = data.title.toString();
    const description = data.description.toString();
    const deadline = data.deadline.toString();
    const newTask = {
      id,
      title,
      description,
      deadline,
      isDone,
    };
    todoList.value.push(newTask);
    if (todoList.value[todoList.value.length - 1].id === id) {
      console.log(todoList.value);
      return true;
    } else {
      console.log(todoList.value);
      return false;
    }
  } else {
    console.log(todoList.value);
    return false;
  }
}

function editTask(data: Todo) {
  const indexId = todoList.value.findIndex((e) => e.id == data.id);

  if (
    data.title !== undefined &&
    data.description !== undefined &&
    data.deadline !== undefined &&
    data.title !== '' &&
    data.description !== '' &&
    data.deadline !== ''
  ) {
    const title = data.title.toString();
    const description = data.description.toString();
    const deadline = data.deadline.toString();
    const isDone = todoList.value[indexId].isDone;

    if (indexId !== -1) {
      todoList.value[indexId] = {
        ...todoList.value[indexId],
        title,
        description,
        deadline,
        isDone,
      };
      console.log(todoList.value);
      return true;
    } else {
      console.log(todoList.value);
      return false;
    }
  } else {
    console.log(todoList.value);
    return false;
  }
}

function deleteTask(data: Todo) {
  const indexId = todoList.value.findIndex((e) => e.id == data.id);
  if (indexId !== -1) {
    todoList.value.splice(indexId, 1);
    console.log('Task Deleted Successfully');
    console.log(todoList.value);
  }
}

export default todoList;
export { addTask, editTask, deleteTask };
