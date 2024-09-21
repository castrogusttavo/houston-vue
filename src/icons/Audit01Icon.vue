
<template>
  <Icon :iconName="'audit-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Audit01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'audit-01'
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
