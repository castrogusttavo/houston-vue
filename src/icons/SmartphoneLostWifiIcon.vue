
<template>
  <Icon :iconName="'smartphone-lost-wifi'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmartphoneLostWifiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'smartphone-lost-wifi'
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
