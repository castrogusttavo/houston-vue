
<template>
  <Icon :iconName="'savings'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SavingsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'savings'
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
