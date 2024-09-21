
<template>
  <Icon :iconName="'taxes'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TaxesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'taxes'
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
