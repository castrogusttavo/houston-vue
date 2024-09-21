
<template>
  <Icon :iconName="'circle-arrow-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-vertical'
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
