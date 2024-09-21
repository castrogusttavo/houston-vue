
<template>
  <Icon :iconName="'hourglass'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HourglassIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hourglass'
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
