
<template>
  <Icon :iconName="'mouse-right-click-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MouseRightClick05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-right-click-05'
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
