
<template>
  <Icon :iconName="'device-access'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeviceAccessIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'device-access'
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
