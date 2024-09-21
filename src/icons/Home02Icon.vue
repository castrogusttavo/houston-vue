
<template>
  <Icon :iconName="'home-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Home02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'home-02'
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
