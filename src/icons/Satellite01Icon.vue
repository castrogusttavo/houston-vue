
<template>
  <Icon :iconName="'satellite-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Satellite01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'satellite-01'
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
