
<template>
  <Icon :iconName="'text-footnote'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextFootnoteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-footnote'
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
