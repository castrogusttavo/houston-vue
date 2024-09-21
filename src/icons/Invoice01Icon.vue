
<template>
  <Icon :iconName="'invoice-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Invoice01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'invoice-01'
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
