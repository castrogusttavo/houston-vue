
<template>
  <Icon :iconName="'archive-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Archive02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'archive-02'
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
