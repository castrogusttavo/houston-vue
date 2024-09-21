
<template>
  <Icon :iconName="'menu-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Menu02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'menu-02'
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
