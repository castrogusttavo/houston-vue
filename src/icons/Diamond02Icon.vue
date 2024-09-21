
<template>
  <Icon :iconName="'diamond-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Diamond02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'diamond-02'
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
