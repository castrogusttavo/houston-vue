
<template>
  <Icon :iconName="'border-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BorderVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'border-vertical'
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
