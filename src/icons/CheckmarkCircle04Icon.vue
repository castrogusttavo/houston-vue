
<template>
  <Icon :iconName="'checkmark-circle-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheckmarkCircle04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'checkmark-circle-04'
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
