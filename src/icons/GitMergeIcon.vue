
<template>
  <Icon :iconName="'git-merge'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GitMergeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'git-merge'
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
