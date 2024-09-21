
<template>
  <Icon :iconName="'border-full'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderFullIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-full'
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
