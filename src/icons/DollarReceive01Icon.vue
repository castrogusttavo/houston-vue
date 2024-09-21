
<template>
  <Icon :iconName="'dollar-receive-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DollarReceive01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dollar-receive-01'
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
