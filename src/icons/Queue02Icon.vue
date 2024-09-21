
<template>
  <Icon :iconName="'queue-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Queue02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'queue-02'
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
