
<template>
  <Icon :iconName="'call-blocked-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallBlocked02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-blocked-02'
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
