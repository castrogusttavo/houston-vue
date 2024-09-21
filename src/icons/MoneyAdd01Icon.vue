
<template>
  <Icon :iconName="'money-add-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneyAdd01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-add-01'
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
