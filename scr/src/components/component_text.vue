<template>
    <div v-for="item in text" :key="item.name">
        <h1 v-if="item.name == 3">{{ item.name }}</h1>
    </div>
</template>

<script>
 export default{
    props:['text']
 }
</script>