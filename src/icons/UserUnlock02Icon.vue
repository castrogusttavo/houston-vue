
<template>
  <Icon :iconName="'user-unlock-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserUnlock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-unlock-02'
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
