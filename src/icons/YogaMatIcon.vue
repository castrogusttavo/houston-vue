
<template>
  <Icon :iconName="'yoga-mat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'YogaMatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'yoga-mat'
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
