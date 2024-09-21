
<template>
  <Icon :iconName="'comment-add-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CommentAdd01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'comment-add-01'
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
