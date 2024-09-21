
<template>
  <Icon :iconName="'dumbbell-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Dumbbell02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dumbbell-02'
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
