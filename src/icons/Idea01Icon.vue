
<template>
  <Icon :iconName="'idea-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Idea01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'idea-01'
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
