
<template>
  <Icon :iconName="'breast-pump'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BreastPumpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'breast-pump'
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
