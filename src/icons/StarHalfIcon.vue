
<template>
  <Icon :iconName="'star-half'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StarHalfIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'star-half'
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
