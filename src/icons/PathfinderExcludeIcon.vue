
<template>
  <Icon :iconName="'pathfinder-exclude'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PathfinderExcludeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pathfinder-exclude'
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
