<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>

  <p>kagan: {{ kaganDeger }}</p>
  <p>gorkem: {{ gorkemDeger }}</p>
  <p>yigitcan: {{ yigitcanMi }}</p>
  <q-btn label="Değerleri Değiştir" @click="updateValues" />
</template>

<script setup lang="ts">
import { useAppStore } from 'stores/app-store';
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { ref } from 'vue';

const appStore = useAppStore();
const kaganDeger = ref(appStore.kaganDeger);
const gorkemDeger = ref(appStore.gorkemDeger);
const yigitcanMi = ref(appStore.yigitcanMi);
const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1'
  },
  {
    id: 2,
    content: 'ct2'
  },
  {
    id: 3,
    content: 'ct3'
  },
  {
    id: 4,
    content: 'ct4'
  },
  {
    id: 5,
    content: 'ct5'
  }
]);
const meta = ref<Meta>({
  totalCount: 1200
});

const updateValues = () => {
  if (kaganDeger.value === 'eren kagan adam') {
    appStore.kaganGuncelle(null);
  } else {
    appStore.kaganGuncelle('eren kagan adam');
  }
};
</script>
