
<template>
  <Icon :iconName="'border-left-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderLeft01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-left-01'
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
