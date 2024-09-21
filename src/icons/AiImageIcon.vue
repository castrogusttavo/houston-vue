
<template>
  <Icon :iconName="'ai-image'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiImageIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-image'
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
