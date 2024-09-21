
<template>
  <Icon :iconName="'carousel-horizontal-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CarouselHorizontal02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'carousel-horizontal-02'
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
