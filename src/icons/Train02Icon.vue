
<template>
  <Icon :iconName="'train-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Train02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'train-02'
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
