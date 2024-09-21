
<template>
  <Icon :iconName="'copilot'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CopilotIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'copilot'
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
