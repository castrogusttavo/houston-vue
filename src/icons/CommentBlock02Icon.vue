
<template>
  <Icon :iconName="'comment-block-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CommentBlock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'comment-block-02'
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
