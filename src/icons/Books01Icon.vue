
<template>
  <Icon :iconName="'books-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Books01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'books-01'
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
