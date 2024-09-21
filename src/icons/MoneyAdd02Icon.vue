
<template>
  <Icon :iconName="'money-add-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneyAdd02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-add-02'
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
