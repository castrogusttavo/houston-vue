
<template>
  <Icon :iconName="'waze'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WazeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'waze'
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
