
<template>
  <Icon :iconName="'customer-support'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CustomerSupportIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'customer-support'
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
