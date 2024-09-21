
<template>
  <Icon :iconName="'ai-mail'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiMailIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-mail'
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
