
<template>
  <Icon :iconName="'moon-angled-rain-zap'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonAngledRainZapIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-angled-rain-zap'
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
