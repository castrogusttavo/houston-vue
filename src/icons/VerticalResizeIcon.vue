
<template>
  <Icon :iconName="'vertical-resize'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VerticalResizeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vertical-resize'
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
