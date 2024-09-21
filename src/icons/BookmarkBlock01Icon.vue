
<template>
  <Icon :iconName="'bookmark-block-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookmarkBlock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bookmark-block-01'
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
