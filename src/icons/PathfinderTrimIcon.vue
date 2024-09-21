
<template>
  <Icon :iconName="'pathfinder-trim'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PathfinderTrimIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pathfinder-trim'
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
