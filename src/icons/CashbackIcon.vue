
<template>
  <Icon :iconName="'cashback'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CashbackIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cashback'
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
