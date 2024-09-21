
<template>
  <Icon :iconName="'house-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'House03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'house-03'
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
