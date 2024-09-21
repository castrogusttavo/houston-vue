
<template>
  <Icon :iconName="'secured-network'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SecuredNetworkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'secured-network'
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
