
<template>
  <Icon :iconName="'arrow-up-right-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowUpRight02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-up-right-02'
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
