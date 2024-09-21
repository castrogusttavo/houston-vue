
<template>
  <Icon :iconName="'security-lock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SecurityLockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'security-lock'
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
