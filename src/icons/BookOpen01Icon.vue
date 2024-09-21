
<template>
  <Icon :iconName="'book-open-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookOpen01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'book-open-01'
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
