
<template>
  <Icon :iconName="'unlink-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Unlink04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'unlink-04'
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
