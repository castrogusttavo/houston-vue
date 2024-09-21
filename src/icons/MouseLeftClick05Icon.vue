
<template>
  <Icon :iconName="'mouse-left-click-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MouseLeftClick05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-left-click-05'
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
