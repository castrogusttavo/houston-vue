
<template>
  <Icon :iconName="'book-edit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookEditIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'book-edit'
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
