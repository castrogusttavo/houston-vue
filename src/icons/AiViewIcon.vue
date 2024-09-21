
<template>
  <Icon :iconName="'ai-view'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiViewIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-view'
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
