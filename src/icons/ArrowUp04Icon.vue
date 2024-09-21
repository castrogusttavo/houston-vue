
<template>
  <Icon :iconName="'arrow-up-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowUp04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-up-04'
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
