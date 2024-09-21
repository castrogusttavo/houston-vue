
<template>
  <Icon :iconName="'minimize-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Minimize04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'minimize-04'
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
