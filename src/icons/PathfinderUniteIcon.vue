
<template>
  <Icon :iconName="'pathfinder-unite'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PathfinderUniteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pathfinder-unite'
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
