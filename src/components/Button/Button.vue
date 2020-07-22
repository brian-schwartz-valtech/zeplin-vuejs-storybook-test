<template>
  <button 
    class="Big-Text"
    :disabled="isDisabled" >
    {{ buttonLabel}}
  </button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    buttonLabel: String,
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style src="./Button.css"></style>

