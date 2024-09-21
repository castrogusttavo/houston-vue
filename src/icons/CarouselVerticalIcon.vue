
<template>
  <Icon :iconName="'carousel-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CarouselVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'carousel-vertical'
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
