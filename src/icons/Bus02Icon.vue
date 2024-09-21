
<template>
  <Icon :iconName="'bus-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bus02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bus-02'
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
