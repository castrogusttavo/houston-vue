
<template>
  <Icon :iconName="'delivered-sent'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliveredSentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivered-sent'
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
