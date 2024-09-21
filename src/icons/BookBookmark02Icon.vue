
<template>
  <Icon :iconName="'book-bookmark-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookBookmark02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'book-bookmark-02'
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
