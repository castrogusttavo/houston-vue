
<template>
  <Icon :iconName="'waiter'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WaiterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'waiter'
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
