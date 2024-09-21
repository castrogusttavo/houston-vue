
<template>
  <Icon :iconName="'lock-computer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LockComputerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lock-computer'
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
