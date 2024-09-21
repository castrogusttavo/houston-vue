
<template>
  <Icon :iconName="'ai-network'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiNetworkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-network'
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
