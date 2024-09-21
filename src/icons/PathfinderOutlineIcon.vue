
<template>
  <Icon :iconName="'pathfinder-outline'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PathfinderOutlineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pathfinder-outline'
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
