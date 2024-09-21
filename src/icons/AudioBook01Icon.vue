
<template>
  <Icon :iconName="'audio-book-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AudioBook01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'audio-book-01'
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
