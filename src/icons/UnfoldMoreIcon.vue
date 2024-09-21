
<template>
  <Icon :iconName="'unfold-more'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UnfoldMoreIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'unfold-more'
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
