
<template>
  <Icon :iconName="'calling-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Calling02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calling-02'
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
