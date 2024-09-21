
<template>
  <Icon :iconName="'border-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-horizontal'
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
