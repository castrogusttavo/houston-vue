
<template>
  <Icon :iconName="'stop-watch'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StopWatchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stop-watch'
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
