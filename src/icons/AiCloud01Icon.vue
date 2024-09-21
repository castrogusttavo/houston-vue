
<template>
  <Icon :iconName="'ai-cloud-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiCloud01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-cloud-01'
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
