
<template>
  <Icon :iconName="'drag-drop-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DragDropVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drag-drop-vertical'
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
