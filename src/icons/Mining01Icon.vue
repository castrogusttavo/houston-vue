
<template>
  <Icon :iconName="'mining-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mining01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mining-01'
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
