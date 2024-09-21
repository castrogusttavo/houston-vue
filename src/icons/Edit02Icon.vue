
<template>
  <Icon :iconName="'edit-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Edit02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'edit-02'
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
