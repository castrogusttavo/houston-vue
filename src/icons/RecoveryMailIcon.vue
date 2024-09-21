
<template>
  <Icon :iconName="'recovery-mail'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RecoveryMailIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'recovery-mail'
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
