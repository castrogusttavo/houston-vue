
<template>
  <Icon :iconName="'drag-drop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DragDropIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drag-drop'
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
