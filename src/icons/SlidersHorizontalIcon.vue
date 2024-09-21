
<template>
  <Icon :iconName="'sliders-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SlidersHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sliders-horizontal'
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
