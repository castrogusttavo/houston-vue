
<template>
  <Icon :iconName="'mobile-programming-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MobileProgramming02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mobile-programming-02'
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
