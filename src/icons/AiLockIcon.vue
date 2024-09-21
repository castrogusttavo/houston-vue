
<template>
  <Icon :iconName="'ai-lock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiLockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-lock'
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
