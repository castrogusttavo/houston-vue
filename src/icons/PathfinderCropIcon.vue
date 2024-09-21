
<template>
  <Icon :iconName="'pathfinder-crop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PathfinderCropIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pathfinder-crop'
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
