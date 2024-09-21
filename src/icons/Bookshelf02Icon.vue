
<template>
  <Icon :iconName="'bookshelf-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bookshelf02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bookshelf-02'
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
