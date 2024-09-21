
<template>
  <Icon :iconName="'audio-book-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AudioBook03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'audio-book-03'
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
