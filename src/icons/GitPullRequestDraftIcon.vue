
<template>
  <Icon :iconName="'git-pull-request-draft'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GitPullRequestDraftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'git-pull-request-draft'
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
