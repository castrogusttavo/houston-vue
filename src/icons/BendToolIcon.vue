
<template>
  <Icon :iconName="'bend-tool'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BendToolIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bend-tool'
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
