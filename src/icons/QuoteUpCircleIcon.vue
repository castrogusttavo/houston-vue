
<template>
  <Icon :iconName="'quote-up-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'QuoteUpCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quote-up-circle'
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
