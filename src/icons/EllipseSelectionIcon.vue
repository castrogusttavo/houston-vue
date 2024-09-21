
<template>
  <Icon :iconName="'ellipse-selection'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EllipseSelectionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ellipse-selection'
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
