
<template>
  <Icon :iconName="'backward-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Backward02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'backward-02'
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
