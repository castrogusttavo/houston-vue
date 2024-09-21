
<template>
  <Icon :iconName="'pathfinder-divide'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PathfinderDivideIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pathfinder-divide'
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
