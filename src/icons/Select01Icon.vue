
<template>
  <Icon :iconName="'select-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Select01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'select-01'
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
