
<template>
  <Icon :iconName="'brush'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BrushIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'brush'
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
