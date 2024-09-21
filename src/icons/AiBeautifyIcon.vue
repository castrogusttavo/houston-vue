
<template>
  <Icon :iconName="'ai-beautify'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiBeautifyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-beautify'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
