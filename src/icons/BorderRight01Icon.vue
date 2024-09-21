
<template>
  <Icon :iconName="'border-right-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderRight01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-right-01'
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
