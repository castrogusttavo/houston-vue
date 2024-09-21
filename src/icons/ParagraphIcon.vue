
<template>
  <Icon :iconName="'paragraph'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ParagraphIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'paragraph'
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
