
<template>
  <Icon :iconName="'discount'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiscountIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'discount'
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
