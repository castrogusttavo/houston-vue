
<template>
  <Icon :iconName="'git-pull-request'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GitPullRequestIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'git-pull-request'
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
