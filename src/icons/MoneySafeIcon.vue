
<template>
  <Icon :iconName="'money-safe'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneySafeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-safe'
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
