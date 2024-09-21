
<template>
  <Icon :iconName="'saturn-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Saturn01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'saturn-01'
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
