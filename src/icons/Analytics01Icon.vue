
<template>
  <Icon :iconName="'analytics-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Analytics01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'analytics-01'
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
