
<template>
  <Icon :iconName="'telescope-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Telescope02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'telescope-02'
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
