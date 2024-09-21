
<template>
  <Icon :iconName="'drag-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Drag03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drag-03'
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
