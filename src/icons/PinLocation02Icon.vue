
<template>
  <Icon :iconName="'pin-location-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PinLocation02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pin-location-02'
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
