<script setup>
import { ref } from 'vue';

const seen = ref(true);

const url = ref('https://www.google.com');

const onClick = (event) => {
  event.preventDefault();
  console.log('button clicked');
}

const onSubmit = () => console.log('submitted');
</script>

<template>
<!-- Chrome Developer Tools - Elements에서 바인딩 여부 확인 -->
<p v-if="seen">Now you see me</p>

<a :href="url">Go to Google</a>

<!-- submit 버튼으로 동작하는 form태그의 기본 동작(Default behavior)에 의해 화면이 새로고침됨 -->
<form action="someServerUrl">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit" @click="onClick">
</form>

<!-- without modifier -->
<form>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="button" value="Submit" @click="onClick">
</form>

<!-- using modifier -->
<form @submit.prevent="onSubmit">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>

</template>

<style scoped></style>