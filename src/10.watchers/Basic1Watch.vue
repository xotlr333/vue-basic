<template>
    <button @click="x += 1">x값 1 증가</button>
    <div>x: {{  x  }}</div>
    <button>y값 1 증가</button>
    <div>y: {{  y  }}</div>
</template>

<script setup>
import { ref, watch } from 'vue';


const x = ref(0);
const y = ref(0);

// watch(감시할 반응형 소스, 반응형 소스의 값이 변경될 경우 동작할 콜백함수)
watch(x, (newX) => {
    console.log(`x 값: ${newX}`);
})

watch(x, (newX, oldX) => {
    console.log(`oldX: ${oldX}, newX: ${newX}`);
})

watch(() => x.value, (newX) => {
    console.log(newX);
})
</script>
