
<template>
  <Icon :iconName="'medal-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Medal02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medal-02'
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
