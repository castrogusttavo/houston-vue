
<template>
  <Icon :iconName="'codesandbox'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CodesandboxIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'codesandbox'
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
