
<template>
  <Icon :iconName="'building-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Building01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'building-01'
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
