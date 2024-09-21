
<template>
  <Icon :iconName="'text-indent-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextIndent01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-indent-01'
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
