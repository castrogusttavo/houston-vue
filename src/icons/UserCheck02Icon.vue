
<template>
  <Icon :iconName="'user-check-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserCheck02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-check-02'
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
