
<template>
  <Icon :iconName="'book-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Book02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'book-02'
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
