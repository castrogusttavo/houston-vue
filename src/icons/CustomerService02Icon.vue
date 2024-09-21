
<template>
  <Icon :iconName="'customer-service-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CustomerService02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'customer-service-02'
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
