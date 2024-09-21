
<template>
  <Icon :iconName="'rice-bowl-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RiceBowl01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rice-bowl-01'
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
