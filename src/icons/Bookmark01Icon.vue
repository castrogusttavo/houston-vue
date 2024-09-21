
<template>
  <Icon :iconName="'bookmark-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bookmark01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bookmark-01'
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
