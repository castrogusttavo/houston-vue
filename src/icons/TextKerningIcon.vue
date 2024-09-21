
<template>
  <Icon :iconName="'text-kerning'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextKerningIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-kerning'
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
