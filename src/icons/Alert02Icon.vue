
<template>
  <Icon :iconName="'alert-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Alert02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alert-02'
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
