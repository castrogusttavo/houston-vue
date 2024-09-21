
<template>
  <Icon :iconName="'computer-settings'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerSettingsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer-settings'
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
