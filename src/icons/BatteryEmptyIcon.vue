
<template>
  <Icon :iconName="'battery-empty'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BatteryEmptyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'battery-empty'
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
