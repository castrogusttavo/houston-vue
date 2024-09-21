
<template>
  <Icon :iconName="'unlink-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Unlink02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'unlink-02'
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
