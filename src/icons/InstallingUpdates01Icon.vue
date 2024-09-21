
<template>
  <Icon :iconName="'installing-updates-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InstallingUpdates01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'installing-updates-01'
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
