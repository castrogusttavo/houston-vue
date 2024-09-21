
<template>
  <Icon :iconName="'bookmark-add-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookmarkAdd01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bookmark-add-01'
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
