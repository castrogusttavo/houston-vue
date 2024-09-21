
<template>
  <Icon :iconName="'ai-video'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiVideoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-video'
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
