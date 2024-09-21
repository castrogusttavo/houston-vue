
<template>
  <Icon :iconName="'framer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FramerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'framer'
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
