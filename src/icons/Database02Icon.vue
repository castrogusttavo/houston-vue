
<template>
  <Icon :iconName="'database-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Database02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'database-02'
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
