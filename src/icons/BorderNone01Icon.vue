
<template>
  <Icon :iconName="'border-none-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderNone01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-none-01'
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
