
<template>
  <Icon :iconName="'3d-move'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThreeDMoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: '3d-move'
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
