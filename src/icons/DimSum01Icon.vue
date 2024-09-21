
<template>
  <Icon :iconName="'dim-sum-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DimSum01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dim-sum-01'
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
