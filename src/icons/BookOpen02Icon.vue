
<template>
  <Icon :iconName="'book-open-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookOpen02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'book-open-02'
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
