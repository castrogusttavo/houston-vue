
<template>
  <Icon :iconName="'figma'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FigmaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'figma'
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
