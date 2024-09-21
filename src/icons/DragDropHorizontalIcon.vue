
<template>
  <Icon :iconName="'drag-drop-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DragDropHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drag-drop-horizontal'
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
