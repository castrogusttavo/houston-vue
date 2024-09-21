
<template>
  <Icon :iconName="'delivery-sent-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliverySent01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-sent-01'
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
