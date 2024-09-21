
<template>
  <Icon :iconName="'square-arrow-reload-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowReload02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-reload-02'
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
