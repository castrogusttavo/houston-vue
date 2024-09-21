
<template>
  <Icon :iconName="'car-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Car04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'car-04'
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
