
<template>
  <Icon :iconName="'cursor-edit-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CursorEdit02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-edit-02'
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
