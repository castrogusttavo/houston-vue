
<template>
  <Icon :iconName="'comment-block-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CommentBlock01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'comment-block-01'
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
