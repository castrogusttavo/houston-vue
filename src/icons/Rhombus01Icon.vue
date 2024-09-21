
<template>
  <Icon :iconName="'rhombus-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Rhombus01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rhombus-01'
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
