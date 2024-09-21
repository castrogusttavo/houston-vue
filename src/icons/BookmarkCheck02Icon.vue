
<template>
  <Icon :iconName="'bookmark-check-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookmarkCheck02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bookmark-check-02'
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
