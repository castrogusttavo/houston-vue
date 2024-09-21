
<template>
  <Icon :iconName="'tissue-paper'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TissuePaperIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tissue-paper'
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
