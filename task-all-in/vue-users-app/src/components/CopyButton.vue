<template>
  <button
    v-copy="text"
    v-copy:callback="handleCopied"
    v-tooltip.top-start="copySurnameTooltip"
    type="button"
    class="btn btn-light btn-sm"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'CopyButton',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data: function() {
    return {
      copySurnameTooltip: 'Скопировать "' + this.text + '" в буфер'
    }
  },
  methods: {
    handleCopied: function(text) {
      alert(`Скопированно: ${text}`)
    }
  }
}
</script>

<style></style>
