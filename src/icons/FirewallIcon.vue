
<template>
  <Icon :iconName="'firewall'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FirewallIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'firewall'
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
