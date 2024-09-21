
<template>
  <Icon :iconName="'pen-tool-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PenTool03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pen-tool-03'
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
