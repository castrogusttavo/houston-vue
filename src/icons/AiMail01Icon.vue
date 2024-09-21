
<template>
  <Icon :iconName="'ai-mail-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiMail01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-mail-01'
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
