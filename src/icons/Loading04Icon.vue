
<template>
  <Icon :iconName="'loading-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Loading04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'loading-04'
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
