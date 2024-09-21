
<template>
  <Icon :iconName="'inequality-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InequalitySquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'inequality-square-02'
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
