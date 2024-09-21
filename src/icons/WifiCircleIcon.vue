
<template>
  <Icon :iconName="'wifi-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-circle'
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
