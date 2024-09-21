
<template>
  <Icon :iconName="'save-money-euro'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SaveMoneyEuroIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'save-money-euro'
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
