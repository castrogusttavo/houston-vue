
<template>
  <Icon :iconName="'ai-brain-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiBrain02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-brain-02'
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
