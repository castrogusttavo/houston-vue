
<template>
  <Icon :iconName="'ai-innovation-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiInnovation01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-innovation-01'
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
