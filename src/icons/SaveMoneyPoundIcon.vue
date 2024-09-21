
<template>
  <Icon :iconName="'save-money-pound'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SaveMoneyPoundIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'save-money-pound'
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
