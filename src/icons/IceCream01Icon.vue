
<template>
  <Icon :iconName="'ice-cream-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IceCream01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ice-cream-01'
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
