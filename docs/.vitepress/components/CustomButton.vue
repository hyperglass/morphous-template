<script>
export default {
  name: 'CustomButton',
  props: {
    link: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: 'Button'
    }
  },
  methods: {
    openLink() {
      window.open(this.link, '_blank')
    }
  }
}
</script>

<template>
  <button class="custom-button" @click="openLink">{{ label }}</button>
</template>

