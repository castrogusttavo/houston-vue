
<template>
  <Icon :iconName="'ai-programming'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiProgrammingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-programming'
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
