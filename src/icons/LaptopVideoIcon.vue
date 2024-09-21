
<template>
  <Icon :iconName="'laptop-video'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaptopVideoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laptop-video'
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
