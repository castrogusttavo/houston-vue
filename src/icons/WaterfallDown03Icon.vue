
<template>
  <Icon :iconName="'waterfall-down-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WaterfallDown03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'waterfall-down-03'
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
