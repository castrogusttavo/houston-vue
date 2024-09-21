
<template>
  <Icon :iconName="'shield-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Shield02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shield-02'
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
