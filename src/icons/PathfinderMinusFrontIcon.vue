
<template>
  <Icon :iconName="'pathfinder-minus-front'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PathfinderMinusFrontIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pathfinder-minus-front'
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
