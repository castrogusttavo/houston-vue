
<template>
  <Icon :iconName="'dollar-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DollarCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dollar-circle'
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
