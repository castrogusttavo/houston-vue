
<template>
  <Icon :iconName="'circle-arrow-right-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowRight03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-right-03'
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
