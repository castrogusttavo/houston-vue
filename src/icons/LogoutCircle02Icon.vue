
<template>
  <Icon :iconName="'logout-circle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LogoutCircle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'logout-circle-02'
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
