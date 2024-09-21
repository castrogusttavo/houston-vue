
<template>
  <Icon :iconName="'ai-brain-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiBrain03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-brain-03'
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
