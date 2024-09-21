
<template>
  <Icon :iconName="'comment-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Comment02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'comment-02'
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
