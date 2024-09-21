
<template>
  <Icon :iconName="'tools'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ToolsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tools'
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
