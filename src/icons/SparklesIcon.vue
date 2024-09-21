
<template>
  <Icon :iconName="'sparkles'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SparklesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sparkles'
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
