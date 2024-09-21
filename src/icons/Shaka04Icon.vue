
<template>
  <Icon :iconName="'shaka-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Shaka04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shaka-04'
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
