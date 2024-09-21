
<template>
  <Icon :iconName="'wireless-cloud-access'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WirelessCloudAccessIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wireless-cloud-access'
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
