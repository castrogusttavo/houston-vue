
<template>
  <Icon :iconName="'motorbike-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Motorbike01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'motorbike-01'
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
