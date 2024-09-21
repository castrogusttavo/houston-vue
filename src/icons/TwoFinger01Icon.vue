
<template>
  <Icon :iconName="'two-finger-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TwoFinger01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'two-finger-01'
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
