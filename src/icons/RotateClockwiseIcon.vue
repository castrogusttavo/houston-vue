
<template>
  <Icon :iconName="'rotate-clockwise'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RotateClockwiseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rotate-clockwise'
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
