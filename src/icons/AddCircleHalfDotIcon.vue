
<template>
  <Icon :iconName="'add-circle-half-dot'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AddCircleHalfDotIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'add-circle-half-dot'
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
