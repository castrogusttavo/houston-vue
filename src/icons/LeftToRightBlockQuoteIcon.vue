
<template>
  <Icon :iconName="'left-to-right-block-quote'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LeftToRightBlockQuoteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'left-to-right-block-quote'
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
