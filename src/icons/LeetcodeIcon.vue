
<template>
  <Icon :iconName="'leetcode'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LeetcodeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'leetcode'
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
