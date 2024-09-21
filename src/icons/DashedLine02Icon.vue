
<template>
  <Icon :iconName="'dashed-line-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DashedLine02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dashed-line-02'
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
