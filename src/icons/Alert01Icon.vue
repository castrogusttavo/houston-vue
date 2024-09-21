
<template>
  <Icon :iconName="'alert-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Alert01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alert-01'
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
