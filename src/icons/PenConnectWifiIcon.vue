
<template>
  <Icon :iconName="'pen-connect-wifi'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PenConnectWifiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pen-connect-wifi'
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
