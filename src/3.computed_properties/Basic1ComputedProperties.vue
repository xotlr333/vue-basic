<template>
  <p>출판된 도서가 최소 1권 이상 있는지?</p>
  <span>{{ publicshedBooks }}</span>

  <p>{{ fullName }}</p>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { reactive, ref } from 'vue'

const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery',
        'Vue 4 - The Mystery'
    ]
})

// computed는 계산된 속성으로 이해하면 된다
const publicshedBooks = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No';
})

const firstName = ref('John');
const lastName = ref('Doe');

const fullName = computed(() => firstName.value + lastName.value);

</script>