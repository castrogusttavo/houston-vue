
<template>
  <Icon :iconName="'quote-down-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'QuoteDownCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quote-down-circle'
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
