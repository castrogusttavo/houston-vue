
<template>
  <Icon :iconName="'time-quarter'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TimeQuarterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'time-quarter'
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
