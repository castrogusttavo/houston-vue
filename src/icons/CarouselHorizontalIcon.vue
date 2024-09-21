
<template>
  <Icon :iconName="'carousel-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CarouselHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'carousel-horizontal'
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
