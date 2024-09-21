
<template>
  <Icon :iconName="'git-commit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GitCommitIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'git-commit'
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
