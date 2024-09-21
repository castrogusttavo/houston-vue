
<template>
  <Icon :iconName="'sliders-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SlidersVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sliders-vertical'
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
