
<template>
  <Icon :iconName="'arrow-expand-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowExpand02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-expand-02'
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
