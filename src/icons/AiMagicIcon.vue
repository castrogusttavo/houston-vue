
<template>
  <Icon :iconName="'ai-magic'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiMagicIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-magic'
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
