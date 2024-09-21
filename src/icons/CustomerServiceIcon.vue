
<template>
  <Icon :iconName="'customer-service'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CustomerServiceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'customer-service'
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
