
<template>
  <Icon :iconName="'comment-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Comment01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'comment-01'
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
