
<template>
  <Icon :iconName="'magic-wand-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MagicWand02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'magic-wand-02'
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
