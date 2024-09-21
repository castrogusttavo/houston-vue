
<template>
  <Icon :iconName="'castle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Castle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'castle-02'
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
