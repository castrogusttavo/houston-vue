
<template>
  <Icon :iconName="'notebook-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Notebook02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'notebook-02'
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
