
<template>
  <Icon :iconName="'arrow-shrink-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowShrink02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-shrink-02'
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
