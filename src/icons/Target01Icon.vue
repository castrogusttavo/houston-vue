
<template>
  <Icon :iconName="'target-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Target01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'target-01'
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
