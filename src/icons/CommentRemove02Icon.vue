
<template>
  <Icon :iconName="'comment-remove-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CommentRemove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'comment-remove-02'
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
