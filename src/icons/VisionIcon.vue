
<template>
  <Icon :iconName="'vision'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VisionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vision'
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
