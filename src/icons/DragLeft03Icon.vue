
<template>
  <Icon :iconName="'drag-left-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DragLeft03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drag-left-03'
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
