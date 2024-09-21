
<template>
  <Icon :iconName="'fuel-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Fuel01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fuel-01'
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
