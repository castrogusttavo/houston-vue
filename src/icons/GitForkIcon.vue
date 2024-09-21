
<template>
  <Icon :iconName="'git-fork'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GitForkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'git-fork'
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
