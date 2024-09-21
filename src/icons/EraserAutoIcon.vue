
<template>
  <Icon :iconName="'eraser-auto'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EraserAutoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'eraser-auto'
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
