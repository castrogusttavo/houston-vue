
<template>
  <Icon :iconName="'audio-book-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AudioBook02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'audio-book-02'
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
