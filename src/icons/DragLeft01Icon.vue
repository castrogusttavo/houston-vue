
<template>
  <Icon :iconName="'drag-left-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DragLeft01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drag-left-01'
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
