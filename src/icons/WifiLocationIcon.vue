
<template>
  <Icon :iconName="'wifi-location'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiLocationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-location'
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
