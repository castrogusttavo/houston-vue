
<template>
  <Icon :iconName="'time-quarter-pass'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TimeQuarterPassIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'time-quarter-pass'
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
