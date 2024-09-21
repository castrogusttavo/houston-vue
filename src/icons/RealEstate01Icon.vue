
<template>
  <Icon :iconName="'real-estate-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RealEstate01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'real-estate-01'
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
