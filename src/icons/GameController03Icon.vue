
<template>
  <Icon :iconName="'game-controller-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GameController03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'game-controller-03'
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
