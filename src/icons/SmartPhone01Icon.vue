
<template>
  <Icon :iconName="'smart-phone-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmartPhone01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'smart-phone-01'
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
