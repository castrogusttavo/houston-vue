
<template>
  <Icon :iconName="'bookmark-block-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookmarkBlock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bookmark-block-02'
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
