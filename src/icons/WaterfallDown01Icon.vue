
<template>
  <Icon :iconName="'waterfall-down-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WaterfallDown01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'waterfall-down-01'
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
