
<template>
  <Icon :iconName="'dollar-receive-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DollarReceive02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dollar-receive-02'
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
