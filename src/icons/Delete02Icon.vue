
<template>
  <Icon :iconName="'delete-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Delete02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'delete-02'
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
