
<template>
  <Icon :iconName="'gift-card'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GiftCardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gift-card'
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
