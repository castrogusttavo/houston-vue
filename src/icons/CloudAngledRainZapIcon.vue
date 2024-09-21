
<template>
  <Icon :iconName="'cloud-angled-rain-zap'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudAngledRainZapIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-angled-rain-zap'
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
