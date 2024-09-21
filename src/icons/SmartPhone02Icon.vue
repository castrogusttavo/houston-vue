
<template>
  <Icon :iconName="'smart-phone-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmartPhone02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'smart-phone-02'
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
