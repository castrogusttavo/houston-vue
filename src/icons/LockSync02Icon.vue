
<template>
  <Icon :iconName="'lock-sync-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LockSync02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lock-sync-02'
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
