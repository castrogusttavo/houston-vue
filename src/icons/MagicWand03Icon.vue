
<template>
  <Icon :iconName="'magic-wand-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MagicWand03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'magic-wand-03'
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
