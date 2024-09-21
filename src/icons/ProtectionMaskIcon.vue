
<template>
  <Icon :iconName="'protection-mask'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ProtectionMaskIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'protection-mask'
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
