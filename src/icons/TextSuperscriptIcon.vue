
<template>
  <Icon :iconName="'text-superscript'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextSuperscriptIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-superscript'
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
