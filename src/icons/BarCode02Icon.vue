
<template>
  <Icon :iconName="'bar-code-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BarCode02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bar-code-02'
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
