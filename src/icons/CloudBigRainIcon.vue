
<template>
  <Icon :iconName="'cloud-big-rain'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudBigRainIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-big-rain'
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
