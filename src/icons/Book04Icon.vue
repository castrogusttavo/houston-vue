
<template>
  <Icon :iconName="'book-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Book04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'book-04'
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
