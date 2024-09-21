
<template>
  <Icon :iconName="'bookmark-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bookmark02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bookmark-02'
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
