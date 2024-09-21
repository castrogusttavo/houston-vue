
<template>
  <Icon :iconName="'bookmark-remove-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookmarkRemove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bookmark-remove-02'
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
