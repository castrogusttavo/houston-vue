
<template>
  <Icon :iconName="'quote-up-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'QuoteUpSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quote-up-square'
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
