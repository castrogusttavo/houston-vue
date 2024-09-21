
<template>
  <Icon :iconName="'remove-circle-half-dot'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RemoveCircleHalfDotIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'remove-circle-half-dot'
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
