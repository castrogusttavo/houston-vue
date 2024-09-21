
<template>
  <Icon :iconName="'book-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Book03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'book-03'
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
