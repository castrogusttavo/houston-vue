
<template>
  <Icon :iconName="'leaf-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Leaf04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'leaf-04'
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
