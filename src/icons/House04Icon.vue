
<template>
  <Icon :iconName="'house-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'House04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'house-04'
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
