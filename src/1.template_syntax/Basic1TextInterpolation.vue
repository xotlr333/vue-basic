/*
.vue 확장자: Single File Component(SFC)
- 하나의ㅣ 컴포넌트
App.vue도 하나의 컴포넌트, Root 컴포넌트(최상위 컴포넌트)

template - Vue에서 제공하는 특수한 기본 태그

template - HTML 태그(JS코드를 같이 사용할 수 있음)
script - JS 코드
style - CSS 코드

Vue - HTML in JS, CSS
*/

<template>
    <h1>{{ message.msg }}</h1>
    <p>Count is: {{ counter.count }}</p>
</template>

<script setup>
import { reactive } from 'vue';

    // counter - Vue의 이 컴포넌트에서 관리할 상태값
    const counter = reactive({ count: 0 });
    const message = reactive({ msg: 'Hello World!!!!!!'});
</script>

<style></style>
