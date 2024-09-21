
<template>
  <Icon :iconName="'soft-drink-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SoftDrink02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'soft-drink-02'
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
