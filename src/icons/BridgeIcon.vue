
<template>
  <Icon :iconName="'bridge'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BridgeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bridge'
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
