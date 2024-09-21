
<template>
  <Icon :iconName="'thermometer-warm'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThermometerWarmIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'thermometer-warm'
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
