<template>
	<li v-for="(item, index) in itemArray" :key="item.id">
        {{ item }}
        <p>{{ item.message }}</p>
        <p>{{ index }}</p>
        <p>{{ parentMessage }}</p>
        <!-- <p>{{ item.id }}</p> -->
    </li>
</template>

<script setup>
import { ref } from 'vue';

    const parentMessage = ref('Parent');

    const itemArray = [
        { id: 'i1', message: 'Foo' },
        { id: 'i2', message: 'Soo' },
        { id: 'i3', message: 'Tom' },
        { id: 'i4', message: 'Bar' }
    ]

</script>

<style scoped>
li {
    margin: 1rem;
    padding: 0.75rem;
    border: 2px dashed blue;
    list-style: none;
    font-size: 1.5rem;
}
</style>