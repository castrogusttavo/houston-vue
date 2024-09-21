
<template>
  <Icon :iconName="'ai-innovation-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiInnovation02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-innovation-02'
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
