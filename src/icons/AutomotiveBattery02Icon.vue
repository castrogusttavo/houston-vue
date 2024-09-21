
<template>
  <Icon :iconName="'automotive-battery-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AutomotiveBattery02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'automotive-battery-02'
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
