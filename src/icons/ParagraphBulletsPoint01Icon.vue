
<template>
  <Icon :iconName="'paragraph-bullets-point-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ParagraphBulletsPoint01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'paragraph-bullets-point-01'
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
