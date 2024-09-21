
<template>
  <Icon :iconName="'bubble-tea-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleTea02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-tea-02'
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
