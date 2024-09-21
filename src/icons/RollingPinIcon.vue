
<template>
  <Icon :iconName="'rolling-pin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RollingPinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rolling-pin'
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
