
<template>
  <Icon :iconName="'tablet-connected-wifi'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TabletConnectedWifiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tablet-connected-wifi'
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
