
<template>
  <Icon :iconName="'electric-home-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ElectricHome01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'electric-home-01'
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
