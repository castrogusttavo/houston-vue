
<template>
  <Icon :iconName="'delivery-sent-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeliverySent02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delivery-sent-02'
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
