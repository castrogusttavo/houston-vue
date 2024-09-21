
<template>
  <Icon :iconName="'sketch'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SketchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sketch'
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
