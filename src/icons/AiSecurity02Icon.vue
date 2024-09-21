
<template>
  <Icon :iconName="'ai-security-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiSecurity02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-security-02'
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
