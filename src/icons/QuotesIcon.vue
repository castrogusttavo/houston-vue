
<template>
  <Icon :iconName="'quotes'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'QuotesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'quotes'
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
