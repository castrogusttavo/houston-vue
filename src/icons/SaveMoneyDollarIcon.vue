
<template>
  <Icon :iconName="'save-money-dollar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SaveMoneyDollarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'save-money-dollar'
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
