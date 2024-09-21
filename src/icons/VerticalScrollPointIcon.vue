
<template>
  <Icon :iconName="'vertical-scroll-point'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VerticalScrollPointIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vertical-scroll-point'
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
