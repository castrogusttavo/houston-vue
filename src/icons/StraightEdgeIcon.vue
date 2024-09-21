
<template>
  <Icon :iconName="'straight-edge'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StraightEdgeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'straight-edge'
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
