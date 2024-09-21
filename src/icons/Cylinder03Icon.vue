
<template>
  <Icon :iconName="'cylinder-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cylinder03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cylinder-03'
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
