
<template>
  <Icon :iconName="'loading-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Loading02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'loading-02'
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
