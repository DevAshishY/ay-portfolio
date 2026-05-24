<script>

export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}

</script>



<template>
  <main>

    <h1>Counter</h1>

    <button @click="increment">+</button>
    <span>Counter: {{ count }}</span>
    <button @click="decrement">-</button>
  </main>
</template>

<style scoped>
h1 {
  color: #42b983;
}
</style>
