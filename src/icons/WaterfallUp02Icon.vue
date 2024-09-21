
<template>
  <Icon :iconName="'waterfall-up-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WaterfallUp02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'waterfall-up-02'
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
