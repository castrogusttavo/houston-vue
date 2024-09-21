
<template>
  <Icon :iconName="'ai-brain-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiBrain05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-brain-05'
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
