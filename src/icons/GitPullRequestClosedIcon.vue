
<template>
  <Icon :iconName="'git-pull-request-closed'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GitPullRequestClosedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'git-pull-request-closed'
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
