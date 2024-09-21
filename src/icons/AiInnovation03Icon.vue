
<template>
  <Icon :iconName="'ai-innovation-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiInnovation03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-innovation-03'
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
