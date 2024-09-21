
<template>
  <Icon :iconName="'trademark'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TrademarkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'trademark'
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
