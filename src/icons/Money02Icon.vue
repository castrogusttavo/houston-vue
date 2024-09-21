
<template>
  <Icon :iconName="'money-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Money02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-02'
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
