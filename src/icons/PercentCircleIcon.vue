
<template>
  <Icon :iconName="'percent-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PercentCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'percent-circle'
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
