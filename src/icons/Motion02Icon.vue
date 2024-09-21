
<template>
  <Icon :iconName="'motion-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Motion02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'motion-02'
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
