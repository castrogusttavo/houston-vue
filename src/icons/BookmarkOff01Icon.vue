
<template>
  <Icon :iconName="'bookmark-off-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookmarkOff01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bookmark-off-01'
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
