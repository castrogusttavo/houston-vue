
<template>
  <Icon :iconName="'paint-brush-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PaintBrush01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'paint-brush-01'
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
