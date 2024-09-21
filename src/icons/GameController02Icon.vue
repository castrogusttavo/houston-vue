
<template>
  <Icon :iconName="'game-controller-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GameController02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'game-controller-02'
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
