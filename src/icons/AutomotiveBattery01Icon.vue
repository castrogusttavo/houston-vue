
<template>
  <Icon :iconName="'automotive-battery-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AutomotiveBattery01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'automotive-battery-01'
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
