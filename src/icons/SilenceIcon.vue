
<template>
  <Icon :iconName="'silence'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SilenceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'silence'
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
