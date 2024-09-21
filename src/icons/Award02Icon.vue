
<template>
  <Icon :iconName="'award-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Award02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'award-02'
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
