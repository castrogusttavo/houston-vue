
<template>
  <Icon :iconName="'waterfall-up-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WaterfallUp01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'waterfall-up-01'
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
