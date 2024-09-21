
<template>
  <Icon :iconName="'ai-mail-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiMail02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-mail-02'
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
