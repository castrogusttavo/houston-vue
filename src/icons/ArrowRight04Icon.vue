
<template>
  <Icon :iconName="'arrow-right-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowRight04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-right-04'
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
