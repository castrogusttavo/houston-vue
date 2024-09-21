
<template>
  <Icon :iconName="'drag-right-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DragRight01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drag-right-01'
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
