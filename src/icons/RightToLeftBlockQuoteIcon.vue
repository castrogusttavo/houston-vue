
<template>
  <Icon :iconName="'right-to-left-block-quote'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RightToLeftBlockQuoteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'right-to-left-block-quote'
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
