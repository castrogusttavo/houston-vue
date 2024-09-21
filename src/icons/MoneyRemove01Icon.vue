
<template>
  <Icon :iconName="'money-remove-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneyRemove01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-remove-01'
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
