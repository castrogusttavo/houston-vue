
<template>
  <Icon :iconName="'mobile-navigator-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MobileNavigator02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mobile-navigator-02'
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
