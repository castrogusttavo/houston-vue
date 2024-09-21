
<template>
  <Icon :iconName="'book-upload'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookUploadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'book-upload'
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
