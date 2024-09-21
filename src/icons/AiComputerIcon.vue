
<template>
  <Icon :iconName="'ai-computer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiComputerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-computer'
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
