
<template>
  <Icon :iconName="'security-validation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SecurityValidationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'security-validation'
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
