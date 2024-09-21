
<template>
  <Icon :iconName="'navigation-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Navigation02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'navigation-02'
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
