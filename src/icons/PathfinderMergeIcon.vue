
<template>
  <Icon :iconName="'pathfinder-merge'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PathfinderMergeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pathfinder-merge'
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
