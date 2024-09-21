
<template>
  <Icon :iconName="'book-download'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BookDownloadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'book-download'
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
