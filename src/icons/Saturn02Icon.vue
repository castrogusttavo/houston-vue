
<template>
  <Icon :iconName="'saturn-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Saturn02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'saturn-02'
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
