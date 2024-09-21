
<template>
  <Icon :iconName="'user-remove-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserRemove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-remove-02'
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
