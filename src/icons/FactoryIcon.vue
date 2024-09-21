
<template>
  <Icon :iconName="'factory'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FactoryIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'factory'
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
