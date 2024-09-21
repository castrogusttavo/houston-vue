
<template>
  <Icon :iconName="'money-bag-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneyBag02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-bag-02'
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
