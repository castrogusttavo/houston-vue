
<template>
  <Icon :iconName="'horizontal-resize'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HorizontalResizeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'horizontal-resize'
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
