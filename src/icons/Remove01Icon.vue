
<template>
  <Icon :iconName="'remove-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Remove01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'remove-01'
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
