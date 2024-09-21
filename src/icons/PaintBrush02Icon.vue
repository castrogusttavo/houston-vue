
<template>
  <Icon :iconName="'paint-brush-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PaintBrush02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'paint-brush-02'
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
