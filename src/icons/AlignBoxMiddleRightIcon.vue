
<template>
  <Icon :iconName="'align-box-middle-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignBoxMiddleRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-box-middle-right'
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
