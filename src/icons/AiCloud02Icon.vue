
<template>
  <Icon :iconName="'ai-cloud-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiCloud02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-cloud-02'
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
