
<template>
  <Icon :iconName="'cloud-angled-rain'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudAngledRainIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-angled-rain'
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
