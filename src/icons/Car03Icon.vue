
<template>
  <Icon :iconName="'car-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Car03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'car-03'
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
