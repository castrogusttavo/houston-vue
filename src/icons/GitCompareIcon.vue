
<template>
  <Icon :iconName="'git-compare'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GitCompareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'git-compare'
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
