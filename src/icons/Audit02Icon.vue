
<template>
  <Icon :iconName="'audit-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Audit02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'audit-02'
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
