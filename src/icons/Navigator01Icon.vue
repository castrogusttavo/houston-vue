
<template>
  <Icon :iconName="'navigator-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Navigator01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'navigator-01'
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
