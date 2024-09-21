
<template>
  <Icon :iconName="'pin-location-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PinLocation03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pin-location-03'
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
