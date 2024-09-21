
<template>
  <Icon :iconName="'infinity-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Infinity02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'infinity-02'
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
