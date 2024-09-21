
<template>
  <Icon :iconName="'pathfinder-minus-back'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PathfinderMinusBackIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pathfinder-minus-back'
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
