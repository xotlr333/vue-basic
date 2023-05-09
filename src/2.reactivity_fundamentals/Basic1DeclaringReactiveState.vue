<template>
    <div>{{ state.count }}</div>
    <button @click="increament">Click</button>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup() {
        const state = reactive({ count: 0 });
        // console.log(state);

        const increament = () => state.count++;

        return { state, increament }
    }
}
</script>

<style scoped></style>