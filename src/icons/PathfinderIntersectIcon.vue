
<template>
  <Icon :iconName="'pathfinder-intersect'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PathfinderIntersectIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pathfinder-intersect'
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
