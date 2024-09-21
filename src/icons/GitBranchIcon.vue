
<template>
  <Icon :iconName="'git-branch'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GitBranchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'git-branch'
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
