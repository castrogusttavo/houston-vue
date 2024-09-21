
<template>
  <Icon :iconName="'gem'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GemIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gem'
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
