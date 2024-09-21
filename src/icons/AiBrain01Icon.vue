
<template>
  <Icon :iconName="'ai-brain-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiBrain01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-brain-01'
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
