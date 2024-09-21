
<template>
  <Icon :iconName="'moon-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Moon02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-02'
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
