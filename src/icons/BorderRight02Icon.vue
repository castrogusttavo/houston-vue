
<template>
  <Icon :iconName="'border-right-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderRight02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-right-02'
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
