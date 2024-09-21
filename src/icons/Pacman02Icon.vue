
<template>
  <Icon :iconName="'pacman-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Pacman02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pacman-02'
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
