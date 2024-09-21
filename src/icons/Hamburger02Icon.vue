
<template>
  <Icon :iconName="'hamburger-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Hamburger02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hamburger-02'
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
