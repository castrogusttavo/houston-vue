
<template>
  <Icon :iconName="'paragraph-spacing'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ParagraphSpacingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'paragraph-spacing'
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
