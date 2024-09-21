
<template>
  <Icon :iconName="'remove-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Remove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'remove-02'
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
