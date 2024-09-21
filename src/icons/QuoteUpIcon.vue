
<template>
  <Icon :iconName="'quote-up'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'QuoteUpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quote-up'
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
