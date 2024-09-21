
<template>
  <Icon :iconName="'unfold-less'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UnfoldLessIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'unfold-less'
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
