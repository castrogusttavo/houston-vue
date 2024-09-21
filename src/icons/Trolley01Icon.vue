
<template>
  <Icon :iconName="'trolley-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Trolley01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'trolley-01'
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
