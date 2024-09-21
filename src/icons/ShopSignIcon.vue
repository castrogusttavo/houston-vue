
<template>
  <Icon :iconName="'shop-sign'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShopSignIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shop-sign'
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
