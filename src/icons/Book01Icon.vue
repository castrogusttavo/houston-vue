
<template>
  <Icon :iconName="'book-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Book01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'book-01'
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
