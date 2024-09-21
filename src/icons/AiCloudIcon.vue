
<template>
  <Icon :iconName="'ai-cloud'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiCloudIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-cloud'
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
