
<template>
  <Icon :iconName="'paint-brush-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PaintBrush03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'paint-brush-03'
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
