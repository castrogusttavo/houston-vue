
<template>
  <Icon :iconName="'money-remove-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneyRemove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-remove-02'
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
