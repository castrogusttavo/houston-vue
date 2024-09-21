
<template>
  <Icon :iconName="'leaf-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Leaf01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'leaf-01'
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
