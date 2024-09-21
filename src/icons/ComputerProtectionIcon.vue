
<template>
  <Icon :iconName="'computer-protection'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComputerProtectionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'computer-protection'
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
