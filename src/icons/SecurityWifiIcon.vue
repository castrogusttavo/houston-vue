
<template>
  <Icon :iconName="'security-wifi'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SecurityWifiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'security-wifi'
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
