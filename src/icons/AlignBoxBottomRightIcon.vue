
<template>
  <Icon :iconName="'align-box-bottom-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignBoxBottomRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-box-bottom-right'
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
