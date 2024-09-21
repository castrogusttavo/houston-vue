
<template>
  <Icon :iconName="'moon-cloud-little-rain'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonCloudLittleRainIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-cloud-little-rain'
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
