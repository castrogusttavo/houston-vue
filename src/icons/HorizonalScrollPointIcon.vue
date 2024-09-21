
<template>
  <Icon :iconName="'horizonal-scroll-point'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HorizonalScrollPointIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'horizonal-scroll-point'
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
