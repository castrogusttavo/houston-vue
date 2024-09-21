
<template>
  <Icon :iconName="'quote-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'QuoteDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quote-down'
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
