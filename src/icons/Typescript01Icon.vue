
<template>
  <Icon :iconName="'typescript-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Typescript01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'typescript-01'
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
