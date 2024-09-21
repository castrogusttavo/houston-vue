
<template>
  <Icon :iconName="'comment-add-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CommentAdd02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'comment-add-02'
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
