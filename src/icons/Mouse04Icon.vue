
<template>
  <Icon :iconName="'mouse-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-04'
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
