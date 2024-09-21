
<template>
  <Icon :iconName="'border-inner'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderInnerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-inner'
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
