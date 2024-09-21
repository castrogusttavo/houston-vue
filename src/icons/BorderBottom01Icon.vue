
<template>
  <Icon :iconName="'border-bottom-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderBottom01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-bottom-01'
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
