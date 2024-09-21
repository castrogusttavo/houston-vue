
<template>
  <Icon :iconName="'save-money-yen'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SaveMoneyYenIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'save-money-yen'
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
