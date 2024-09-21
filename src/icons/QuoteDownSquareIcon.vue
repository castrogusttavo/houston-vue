
<template>
  <Icon :iconName="'quote-down-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'QuoteDownSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quote-down-square'
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
