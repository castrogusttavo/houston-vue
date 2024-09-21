
<template>
  <Icon :iconName="'bookmark-check-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookmarkCheck01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bookmark-check-01'
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
