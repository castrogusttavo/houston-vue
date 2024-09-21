
<template>
  <Icon :iconName="'summation-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SummationCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'summation-circle'
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
