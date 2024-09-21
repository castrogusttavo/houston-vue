
<template>
  <Icon :iconName="'system-update-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SystemUpdate02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'system-update-02'
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
