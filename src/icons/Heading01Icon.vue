
<template>
  <Icon :iconName="'heading-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Heading01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'heading-01'
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
