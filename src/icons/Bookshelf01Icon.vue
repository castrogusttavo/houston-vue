
<template>
  <Icon :iconName="'bookshelf-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bookshelf01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bookshelf-01'
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
