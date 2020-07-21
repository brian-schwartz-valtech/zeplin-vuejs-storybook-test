<template>
  <button class="Big-Text">Text</button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    buttonText: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 270px;
  height: 70px;
  background-color: black;
}

.Big-Text {
  width: 250px;
  height: 30px;
  font-family: Helvetica;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: white;
  border: 0px;
}
</style>
