
<template>
  <Icon :iconName="'grok'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GrokIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'grok'
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
