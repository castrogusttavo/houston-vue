
<template>
  <Icon :iconName="'flow'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flow'
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
