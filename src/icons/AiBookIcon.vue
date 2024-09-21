
<template>
  <Icon :iconName="'ai-book'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiBookIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-book'
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
