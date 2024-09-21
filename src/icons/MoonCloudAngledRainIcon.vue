
<template>
  <Icon :iconName="'moon-cloud-angled-rain'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonCloudAngledRainIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-cloud-angled-rain'
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
