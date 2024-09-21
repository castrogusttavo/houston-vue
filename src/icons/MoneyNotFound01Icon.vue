
<template>
  <Icon :iconName="'money-not-found-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneyNotFound01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-not-found-01'
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
