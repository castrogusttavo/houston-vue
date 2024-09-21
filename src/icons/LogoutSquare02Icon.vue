
<template>
  <Icon :iconName="'logout-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LogoutSquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'logout-square-02'
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
