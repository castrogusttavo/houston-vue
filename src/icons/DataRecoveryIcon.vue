
<template>
  <Icon :iconName="'data-recovery'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DataRecoveryIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'data-recovery'
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
