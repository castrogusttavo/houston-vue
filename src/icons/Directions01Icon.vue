
<template>
  <Icon :iconName="'directions-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Directions01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'directions-01'
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
