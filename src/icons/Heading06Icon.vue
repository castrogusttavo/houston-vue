
<template>
  <Icon :iconName="'heading-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Heading06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'heading-06'
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
