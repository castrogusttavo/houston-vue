
<template>
  <Icon :iconName="'victory-finger-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VictoryFinger02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'victory-finger-02'
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
