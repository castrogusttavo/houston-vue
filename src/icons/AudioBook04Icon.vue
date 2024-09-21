
<template>
  <Icon :iconName="'audio-book-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AudioBook04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'audio-book-04'
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
