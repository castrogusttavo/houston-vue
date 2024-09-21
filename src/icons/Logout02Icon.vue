
<template>
  <Icon :iconName="'logout-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Logout02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'logout-02'
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
