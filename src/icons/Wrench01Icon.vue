
<template>
  <Icon :iconName="'wrench-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Wrench01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wrench-01'
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
