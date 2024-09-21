
<template>
  <Icon :iconName="'installing-updates-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InstallingUpdates02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'installing-updates-02'
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
