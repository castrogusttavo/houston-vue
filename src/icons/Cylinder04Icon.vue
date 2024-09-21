
<template>
  <Icon :iconName="'cylinder-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cylinder04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cylinder-04'
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
