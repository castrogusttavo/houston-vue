
<template>
  <Icon :iconName="'ds3-tool'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Ds3ToolIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ds3-tool'
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
