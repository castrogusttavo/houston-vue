
<template>
  <Icon :iconName="'mouse-scroll-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MouseScroll01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-scroll-01'
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
