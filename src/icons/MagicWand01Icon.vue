
<template>
  <Icon :iconName="'magic-wand-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MagicWand01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'magic-wand-01'
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
