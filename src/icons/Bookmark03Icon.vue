
<template>
  <Icon :iconName="'bookmark-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bookmark03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bookmark-03'
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
