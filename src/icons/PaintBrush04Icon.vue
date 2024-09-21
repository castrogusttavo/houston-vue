
<template>
  <Icon :iconName="'paint-brush-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PaintBrush04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'paint-brush-04'
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
