
<template>
  <Icon :iconName="'touch-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Touch04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-04'
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
