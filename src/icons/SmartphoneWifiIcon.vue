
<template>
  <Icon :iconName="'smartphone-wifi'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmartphoneWifiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'smartphone-wifi'
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
