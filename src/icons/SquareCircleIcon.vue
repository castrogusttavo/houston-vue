
<template>
  <Icon :iconName="'square-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-circle'
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
