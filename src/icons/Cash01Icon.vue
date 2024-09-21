
<template>
  <Icon :iconName="'cash-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cash01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cash-01'
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
