
<template>
  <Icon :iconName="'raw-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Raw02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'raw-02'
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
