
<template>
  <Icon :iconName="'lock-password'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LockPasswordIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lock-password'
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
