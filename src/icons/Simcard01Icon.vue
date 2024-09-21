
<template>
  <Icon :iconName="'simcard-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Simcard01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'simcard-01'
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
