
<template>
  <Icon :iconName="'square-arrow-reload-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowReload01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-reload-01'
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
