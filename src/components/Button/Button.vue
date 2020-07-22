<template>
  <button class="Big-Text">{{ buttonLabel}}</button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    buttonLabel: String
  }
}
</script>

<style src="./Button.css"></style>

