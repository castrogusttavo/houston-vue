
<template>
  <Icon :iconName="'align-box-top-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignBoxTopRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-box-top-right'
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
