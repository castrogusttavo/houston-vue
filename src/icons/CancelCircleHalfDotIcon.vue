
<template>
  <Icon :iconName="'cancel-circle-half-dot'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CancelCircleHalfDotIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cancel-circle-half-dot'
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
