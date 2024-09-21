
<template>
  <Icon :iconName="'ai-phone-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiPhone02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-phone-02'
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
