
<template>
  <Icon :iconName="'milk-coconut'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MilkCoconutIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'milk-coconut'
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
