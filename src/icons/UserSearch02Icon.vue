
<template>
  <Icon :iconName="'user-search-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserSearch02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-search-02'
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
