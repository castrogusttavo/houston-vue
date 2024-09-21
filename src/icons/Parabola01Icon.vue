
<template>
  <Icon :iconName="'parabola-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Parabola01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'parabola-01'
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
