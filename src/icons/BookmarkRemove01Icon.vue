
<template>
  <Icon :iconName="'bookmark-remove-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookmarkRemove01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bookmark-remove-01'
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
