
<template>
  <Icon :iconName="'time-half-pass'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TimeHalfPassIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'time-half-pass'
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
