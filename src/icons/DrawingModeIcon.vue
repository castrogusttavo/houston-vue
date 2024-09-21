
<template>
  <Icon :iconName="'drawing-mode'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DrawingModeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drawing-mode'
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
