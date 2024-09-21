
<template>
  <Icon :iconName="'web-validation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WebValidationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'web-validation'
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
