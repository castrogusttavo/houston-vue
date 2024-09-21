
<template>
  <Icon :iconName="'ai-search'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiSearchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-search'
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
