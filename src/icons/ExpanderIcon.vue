
<template>
  <Icon :iconName="'expander'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ExpanderIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'expander'
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
