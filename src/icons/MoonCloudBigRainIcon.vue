
<template>
  <Icon :iconName="'moon-cloud-big-rain'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonCloudBigRainIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-cloud-big-rain'
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
