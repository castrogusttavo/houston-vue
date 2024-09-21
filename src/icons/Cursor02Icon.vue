
<template>
  <Icon :iconName="'cursor-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cursor02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cursor-02'
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
