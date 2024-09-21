
<template>
  <Icon :iconName="'user-multiple-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserMultiple02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-multiple-02'
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
