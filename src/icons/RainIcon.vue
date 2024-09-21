
<template>
  <Icon :iconName="'rain'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RainIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rain'
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
