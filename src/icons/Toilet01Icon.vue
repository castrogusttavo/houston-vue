
<template>
  <Icon :iconName="'toilet-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Toilet01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'toilet-01'
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
