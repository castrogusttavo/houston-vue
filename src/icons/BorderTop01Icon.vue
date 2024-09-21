
<template>
  <Icon :iconName="'border-top-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderTop01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-top-01'
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
