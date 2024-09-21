
<template>
  <Icon :iconName="'parabola-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Parabola03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'parabola-03'
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
