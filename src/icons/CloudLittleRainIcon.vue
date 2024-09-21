
<template>
  <Icon :iconName="'cloud-little-rain'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudLittleRainIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-little-rain'
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
