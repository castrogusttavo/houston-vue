
<template>
  <Icon :iconName="'table-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Table02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'table-02'
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
