
<template>
  <Icon :iconName="'ai-folder-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiFolder02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-folder-02'
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
