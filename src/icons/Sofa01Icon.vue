
<template>
  <Icon :iconName="'sofa-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sofa01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sofa-01'
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
