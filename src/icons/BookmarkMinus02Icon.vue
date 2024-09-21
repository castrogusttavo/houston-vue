
<template>
  <Icon :iconName="'bookmark-minus-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookmarkMinus02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bookmark-minus-02'
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
