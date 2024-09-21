
<template>
  <Icon :iconName="'cloud-mid-rain'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudMidRainIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-mid-rain'
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
