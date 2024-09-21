
<template>
  <Icon :iconName="'ai-generative'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiGenerativeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-generative'
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
