
<template>
  <Icon :iconName="'ai-brain-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiBrain04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-brain-04'
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
