
<template>
  <Icon :iconName="'auction'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AuctionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'auction'
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
