
<template>
  <Icon :iconName="'ai-idea'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiIdeaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-idea'
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
