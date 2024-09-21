
<template>
  <Icon :iconName="'factory-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Factory02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'factory-02'
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
