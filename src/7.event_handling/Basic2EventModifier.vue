<script setup>
import { ref } from 'vue'

const input = ref('');

// 1. without Event modifier(Plain JS way)
const clickHandler = (event) => {
    event.preventDefault();
}

const submitHandler = () => {console.log(input.value);}

// 2. Vue Event modifier 활용

</script>

<template>
    <form @submit.prevent="submitHandler">
        <label for="fname">First name:</label>
        <input v-model="input" type="text" id="fname" name="fname">
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname">
        <input type="submit" value="Submit">
    </form>
</template>

<style scoped>
label {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    display: block;
}

input[type='text'] {
    display: block;
    padding: 1rem;
    margin-bottom: 0.5rem;
    height: 2rem;
    font-size: 1.25rem;
    border: 2px dashed gray;
    outline: none;
}

input[type='submit'] {
    background-color: #007bff;
    border: none;
    color: #fff;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

input[type="submit"]:hover {
  background-color: #0062cc;
}
</style>